import { useRef,useEffect} from "react";
import "smart-webcomponents-react/source/styles/smart.default.css";
import { Button } from "smart-webcomponents-react/button";
import { CheckBox } from "smart-webcomponents-react/checkbox";
import { Editor } from "smart-webcomponents-react/editor";

export default function SmartTrial() {
  const editor = useRef();
  const autoSave = true;
  const autoLoad = true;
  const autoSaveInterval = 500;
  
  

  useEffect(() => {

		editorRef.current.expandToolbar();

	}, [])

	const toolbarMode = 'singleLineRibbon'

  const editorRef = useRef(null);

  const saveHtmlContent = () => {
    const editorElement = editorRef.current;
    const htmlContent = editorElement.getHTML(); 
    // const somthing = editorElement.exportData();
    // console.log(somthing) 

    const blob = new Blob([htmlContent], { type: 'text/html' });
    // console.log(blob)
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = 'editor_content.html'; // Set the filename here
    document.body.appendChild(a);
    a.click();
console.log(a);
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  };



  

  const handleEvent = (type) => {
    switch (type) {
      case "save":
        editor.current.saveState();
        break;
      case "load":
        editor.current.loadState();
        break;
      case "delete":
        editor.current.clearState();
        break;
      case "autoSave":
        editor.current.autoSave = !editor.current.autoSave;
        break;
      case "autoLoad":
        editor.current.autoLoad = !editor.current.autoLoad;
        break;
        default: {
            console.log("default")
        }

    }
  };

  return (
    <div>
      <Editor
       ref={editorRef}
        name="myEditor"
        // ref={editor}
        id="editor"
        autoSave={autoSave}
        autoLoad={autoLoad}
        autoSaveInterval={autoSaveInterval}
        // toolbarItems={toolbarItems}
        toolbarMode={toolbarMode}
      >
        <h1 style={{ textAlign: "center" }}>
          <a href="https://en.wikipedia.org/wiki/Sozopol"></a>
        </h1>
        <p></p>
        <h3></h3>
        <table
          style={{
            width: "100%",
            textAlign: "center",
            lineHeight: "1.2em",
            margin: "auto",
          }}
        >
          <tbody></tbody>
        </table>
        <h3></h3>
        <div className="img-left">
          <div className="thumbcaption"></div>
        </div>
        <p>
          {" "}
          <i></i>
        </p>
      </Editor>
      <div className="options">
        <div className="description">
          <h4>Editor State Options</h4>
        </div>
        <div className="option">
          <CheckBox
            id="autoSaveState"
            checked
            onChange={handleEvent.bind(this, "autoSave")}
          >
            Auto Save State
          </CheckBox>
          <CheckBox
            id="autoLoadState"
            onChange={handleEvent.bind(this, "autoLoad")}
            checked
          >
            Auto Load State
          </CheckBox>
        </div>
        <div className="option">
        <button onClick={saveHtmlContent}> saveenoe</button>
          <Button id="saveState" onClick={handleEvent.bind(this, "save")}>
            Save
          </Button>
          <Button id="loadState" onClick={handleEvent.bind(this, "load")}>
            Load
          </Button>
          <Button id="deleteState" onClick={handleEvent.bind(this, "delete")}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
