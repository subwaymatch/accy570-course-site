import { PyodideEnabledWindow } from 'typings/pyodide';
import _ from 'lodash';

declare let window: PyodideEnabledWindow;

class PyodideManager {
  isLoaded: boolean;
  loadedPackages: string[];

  constructor() {
    this.isLoaded = false;
    this.loadedPackages = [];

    // Only run if in browser
    if (typeof window !== 'undefined') {
      window.languagePluginUrl = 'https://pyodide-cdn2.iodide.io/v0.15.0/full/';
    }
  }

  async loadPyodide() {
    console.log(`loadPyodide isLoaded=${this.isLoaded}`);

    if (this.isLoaded) {
      console.log('pyodide already loaded');
      return;
    }

    console.log('now loading pyodide');

    return new Promise((resolve, reject) => {
      window.languagePluginLoader
        .then(() => {
          this.isLoaded = true;

          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async loadPackages(packages) {
    await window.pyodide.loadPackage(packages);

    console.log('loadPackages');
    console.log(window.pyodide.loadedPackages);
  }

  async runCode(code: string) {
    if (!this.isLoaded) await this.loadPyodide();

    try {
      // TODO: Reset global environment (clear global variables)

      // Intercept Python stdout & stderr to StringIO
      window.pyodide.runPython(`import io, sys
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()`);

      const output = window.pyodide.runPython(code);
      const stdout = window.pyodide.runPython('sys.stdout.getvalue()');
      const stderr = await window.pyodide.runPythonAsync(
        'sys.stderr.getvalue()'
      );

      return {
        hasError: false,
        output,
        stdout,
        stderr,
      };
    } catch (err) {
      return {
        hasError: true,
        errorMessage: err.message,
      };
    }
  }

  async runAndCheckCode(code: string, checkCode: string) {
    let codeResult = await this.runCode(code);

    let runAndCheckResult = Object.assign(codeResult, {
      isCorrect: false,
    });

    if (!codeResult.hasError) {
      const checkResult = await this.runCode(checkCode);

      runAndCheckResult = Object.assign({}, codeResult, {
        hasError: checkResult.hasError,
        isCorrect: !checkResult.hasError,
        errorMessage: checkResult.errorMessage,
      });
    }

    return runAndCheckResult;
  }
}

const instance = new PyodideManager();

export default instance;
