import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { NativeSelect} from '@mui/material';
import Code from "./codes"

function MyComponent() {
  
  const [code, setCode] = useState(Code.initial);
  const [curr_option,set_option]=useState("");

  const handleEvent=(event)=>{
    const optionValue = event.target.value;
    set_option(optionValue);
    
    switch(optionValue){
      case "initial":
        setCode(Code.initial);
        break;
      case "js_fetch":
        setCode({code:Code.js_fetch,type:"javascript"});
        break;
        case "js_axios":
        setCode({code:Code.js_axios,type:"javascript"});
        break;
        case "py_request":
        setCode({code:Code.python_req,type:"python"})
        break;
        default:
          console.log("not a valid option");
    }

  }
  return (
    <div className="example">
      <NativeSelect 
      sx={{width:300}}
      value={curr_option} 
      onChange={handleEvent}>
        <option value="initial">Select an Option</option>
        <option value="js_fetch">js_fetch</option>
        <option value="js_axios">js_axios</option>
        <option value="py_request">py_request</option>
      </NativeSelect>
      <SyntaxHighlighter language={code.type} style={okaidia}>
        {code.code}
      </SyntaxHighlighter>
    </div>
  );
}

export default MyComponent;
