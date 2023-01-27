import React from "react";
import AceEditor, { IAceEditorProps } from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const AceEditorComponent = (props: IAceEditorProps): JSX.Element => {
  return (
    <AceEditor
      mode="python"
      placeholder="Placeholder Text"
      theme="monokai"
      name="blah2"
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      width="100%"
      height="45vh"
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      {...props}
    />
  )
}

export default AceEditorComponent;