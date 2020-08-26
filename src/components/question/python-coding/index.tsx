import React, { useState, useRef, useEffect } from 'react';
import pyodideManager from 'lib/pyodide/manager';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import {
  monaco,
  EditorDidMount,
  ControlledEditor,
  ControlledEditorOnChange,
} from '@monaco-editor/react';
import classNames from 'classnames/bind';
import styles from './python-coding-question.module.scss';
import { IPythonCodingQuestion } from 'typings/question';
import { CodeResult } from 'typings/pyodide';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { FiArrowDownRight } from 'react-icons/fi';
import { RiLightbulbLine } from 'react-icons/ri';
import { FaUndo } from 'react-icons/fa';
import {
  ResetButton,
  RunCodeButton,
  SubmitButton,
} from 'src/components/question/buttons';
import {
  HintBox,
  CorrectResultBox,
  IncorrectResultBox,
} from 'src/components/question/message-boxes';

const cx = classNames.bind(styles);

type PythonCodingQuestionProps = {
  question: IPythonCodingQuestion;
  afterSubmit?: (isCorrect) => void;
};

export default function PythonCodingQuestion({
  question,
  afterSubmit,
}: PythonCodingQuestionProps) {
  const defaultCodeResult: CodeResult = {
    hasError: false,
    errorMessage: null,
    output: null,
    stderr: null,
    stdout: null,
  };

  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [editorValue, setEditorValue] = useState(question.templateCode);
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const [codeResult, setCodeResult] = useState(defaultCodeResult);
  const [submittedCode, setSubmittedCode] = useState('');
  const [isSubmitComplete, setIsSubmitComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    pyodideManager.loadPyodide().then(() => {
      setIsPyodideReady(true);
    });
  }, []);

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const reset = async () => {
    console.log('reset');

    if (
      window.confirm(
        'Do you really want to reset your code? Your code will be lost.'
      )
    ) {
      setEditorValue(question.templateCode ? question.templateCode : '');
    }
  };

  const runCode = async () => {
    setIsPyodideReady(false);

    const codeResult = await pyodideManager.runCode(editorValue);

    console.log(codeResult);
    setCodeResult(codeResult);

    setIsPyodideReady(true);
  };

  const runAndCheckCode = async () => {
    setIsPyodideReady(false);

    // setSubmittedCode(editorValue);

    const codeResult = await pyodideManager.runAndCheckCode(
      editorValue,
      question.checkCode
    );

    console.log(codeResult);

    setCodeResult(codeResult);

    setIsSubmitComplete(true);

    if (!codeResult.hasError) {
      setIsCorrect(true);
      if (afterSubmit) {
        afterSubmit(true);
      }
    } else {
      setIsCorrect(false);
      if (afterSubmit) {
        afterSubmit(false);
      }
    }

    setIsPyodideReady(true);
  };

  const handleEditorDidMount: EditorDidMount = (_, editor) => {
    editorRef.current = editor;

    monaco.init().then((monacoInstance) => {
      editor.addCommand(
        monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyCode.Enter,
        () => {
          runCode();
        }
      );
    });
  };

  const handleEditorChange: ControlledEditorOnChange = (ev, value) => {
    setEditorValue(value);
  };

  return (
    <div className={cx('pythonCodingQuestionWrapper')}>
      <div className={cx('questionHeader')}>
        <span className={cx('questionTitle')}>Coding Challenge</span>
        <FiArrowDownRight className={styles.reactIcon} />
      </div>

      <div
        className={cx('questionText')}
        dangerouslySetInnerHTML={{ __html: question.text }}
      />

      <div className={cx('codeEditorWrapper')}>
        <ControlledEditor
          height="20vh"
          value={editorValue}
          editorDidMount={handleEditorDidMount}
          onChange={handleEditorChange}
          language="python"
          options={{
            folding: false,
            fontSize: 19,
            wordWrap: 'on',
            minimap: {
              enabled: false,
            },
            extraEditorClassName: styles.codeEditor,
          }}
        />

        <div className={cx('editorBox', 'commandBox')}>
          {question.hint ? (
            <a
              className={cx('hintButton', {
                isOpen: showHint,
              })}
              onClick={(e) => {
                e.preventDefault();
                toggleHint();
              }}
            >
              <RiLightbulbLine className={styles.hintIcon} />
              <span>{showHint ? 'Hide Hint' : 'See Hint'}</span>
              {showHint ? (
                <IoMdArrowDropup className={styles.toggleIcon} />
              ) : (
                <IoMdArrowDropdown className={styles.toggleIcon} />
              )}
            </a>
          ) : (
            <div />
          )}

          <div className={styles.commandButtons}>
            <ResetButton onClick={reset} />

            <RunCodeButton onClick={runCode} disabled={!isPyodideReady} />

            <SubmitButton
              onClick={runAndCheckCode}
              disabled={!isPyodideReady || submittedCode === editorValue}
            />
          </div>
        </div>

        {question.hint && (
          <HintBox hintMarkdown={question.hint} show={showHint} />
        )}

        <CorrectResultBox
          explanation={question.explanation}
          show={isSubmitComplete && isCorrect}
        />

        <IncorrectResultBox show={isSubmitComplete && !isCorrect} />

        <div className={cx('editorBox', 'outputBox')}>
          <span className={styles.boxLabel}>Output</span>

          <pre>{codeResult.stdout ? codeResult.stdout : 'No Output'}</pre>
        </div>
        <div className={cx('editorBox', 'errorOutputBox')}>
          <span className={styles.boxLabel}>Error</span>

          <pre>
            {codeResult.errorMessage ? codeResult.errorMessage : 'No Error'}
          </pre>
        </div>
      </div>
    </div>
  );
}
