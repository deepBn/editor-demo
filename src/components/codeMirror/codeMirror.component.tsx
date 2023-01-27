import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

interface CodeMirrorComponentProps extends ReactCodeMirrorProps { }

const CodeMirrorComponent = (config: CodeMirrorComponentProps): JSX.Element => {
  return (
    <CodeMirror
      height="45vh"
      extensions={[python()]}
      {...config}
    />);
}

export default CodeMirrorComponent