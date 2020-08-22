export interface PyodideEnabledWindow extends Window {
  languagePluginUrl: string;
  languagePluginLoader: any;
  pyodide: any;
}

export type CodeResult = {
  hasError: boolean;
  errorMessage?: null | string;
  output?: any;
  stderr?: null | string;
  stdout?: null | string;
};
