import { useContext } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";

import { EditorContext } from "../../context/context";

function JsEditor() {
  const { js, setJs } = useContext(EditorContext);
  return (
    <AceEditor
      placeholder="Write your JavaScript codes here!"
      mode="javascript"
      theme="monokai"
      name="editor_js"
      fontSize={16}
      value={js}
      onChange={(value) => setJs(value)}
      height={"100%"}
      width={"100%"}
      showPrintMargin={true}
      showGutter={false}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2,
      }}
    />
  );
}

export default JsEditor;
