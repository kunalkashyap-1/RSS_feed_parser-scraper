import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [api_data,set_api_data] = useState([{}]);

  useEffect(()=>{
    fetch("http://127.0.0.1:8383/feeds/top_stories")
      .then(data => {
        console.log(data)
        set_api_data(data)
      });
  },[]);

  return (
    <div className="App">
      {typeof api_data.Data === "undefined"?<p>Loading...</p>:<p>{api_data}{console.log(api_data)}</p>}
    </div>
  );
}

export default App;
