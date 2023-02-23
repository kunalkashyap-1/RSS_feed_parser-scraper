import Data from "./doc_data";

function Content(){
    return (
        <div>
            <h1 id="intro">Introduction</h1>
            {Data.intro.map((el,i)=> {
                return i !== Data.intro.length-1?<p>{el} <br/></p>:<p>{el}</p> 
                })}
            <h1 id="get_start">Getting Started</h1>
            {Data.get_start.map((el,i)=>{
                return 1 !== Data.get_start-1?<p>{el} <br/></p>:<p>{el}</p>
            })}
            <h1 id="endpoint">Endpoints</h1>
        </div>
    )
}

export default Content;