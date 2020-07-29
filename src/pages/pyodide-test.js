import Layout from '../components/layout';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsPyodidedLoaded, loadPyodide } from 'lib/slices/pyodideSlice';
import { useEffect, useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-solarized_light';

export default function PyodideTestPage() {
  const isPyodideReady = useSelector(selectIsPyodidedLoaded);
  const [userCode, setUserCode] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPyodideReady) {
      dispatch(loadPyodide());
    }
  }, []);

  // const myWorker = new Worker('../../lib/pyodide/pyodide-worker.js');

  // const postToWorker = () => {
  //   myWorker.postMessage([num1, num2]);
  //   console.log(`${num1} and ${num2} posted to worker`);
  // };

  // myWorker.onmessage = (e) => {
  //   SpeechRecognitionResult.textContent = e.data;
  //   console.log('Message received from worker');
  //   console.log(e);
  // };

  const runPython = (code) => {
    if (!isPyodideReady) {
      throw new Error('Pyodide is not loaded yet');
    }

    try {
      console.log(pyodide.runPython(code));
    } catch (err) {
      console.error('Error while running code');
      console.log(code);
    }
  };

  return (
    <Layout>
      <Head>
        <script src="https://pyodide-cdn2.iodide.io/v0.15.0/full/pyodide.js"></script>
      </Head>
      <div>
        {isPyodideReady ? (
          <>
            <AceEditor
              mode="python"
              theme="solarized_light"
              onChange={setUserCode}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
              fontSize={20}
            />

            <button
              onClick={(e) => {
                runPython(userCode);
              }}
              disabled={!isPyodideReady}
            >
              Run!
            </button>
          </>
        ) : (
          <>Loading Python Engine</>
        )}
      </div>
    </Layout>
  );
}
