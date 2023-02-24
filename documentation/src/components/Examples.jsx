import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function MyComponent() {
  const js_fetch = `const fetch = require('node-fetch');

  const url = 'https://Dummy/url/path';
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));`;  
  
  const js_axios = `const axios = require("axios");

  const url = 'https://Dummy/url/path';
  
  axios.get(url)
    .then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });`;

  const python_req = `import requests

  url = "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D"
  
  querystring = {"units":"auto","lang":"en"}
  
  response = requests.request("GET", url, params=querystring)
  
  print(response.text)`;

  const initial ={code:`console.log("Example code goes here")`,type:"javascript"};
  
  const [code, setCode] = useState(initial);
  const [curr_option,set_option]=useState("");

  const handleEvent=(event)=>{
    const optionValue = event.target.value;
    set_option(optionValue);
    
    switch(optionValue){
      case "initial":
        setCode(initial);
        break;
      case "js_fetch":
        setCode({code:js_fetch,type:"javascript"});
        break;
        case "js_axios":
        setCode({code:js_axios,type:"javascript"});
        break;
        case "py_request":
        setCode({code:python_req,type:"python"})
        break;
        default:
          console.log("not a valid option");
    }

  }
  return (
    <div>
      <select value={curr_option} onChange={handleEvent}>
        <option value="initial">Select an Option</option>
        <option value="js_fetch">js_fetch</option>
        <option value="js_axios">js_axios</option>
        <option value="py_request">py_request</option>
      </select>
      <SyntaxHighlighter language={code.type} style={darcula}>
        {code.code}
      </SyntaxHighlighter>
    </div>
  );
}

export default MyComponent;
