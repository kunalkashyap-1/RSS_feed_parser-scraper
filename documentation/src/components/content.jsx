import Data from "./doc_data";

function Content(){
    return (
        <div className="content">
            <h1 id="intro">Introduction</h1>
            {Data.intro.map((el,i)=> {
                return i !== Data.intro.length-1?<p>{el} <br/></p>:<p>{el}</p> 
                })}
            <h1 id="get_start">Getting Started</h1>
            {Data.get_start.map((el,i)=>{
                return i !== Data.get_start.length-1?<p>{el} <br/></p>:<p>{el}</p>
            })}
            <h1 id="endpoint">Endpoints</h1>
            {Data.endpoints[0].ep_title}
            {Data.endpoints.map((el,i)=>{
                return (<div>
                    <strong>{i!== 0?el.ep_title:<></>}</strong>
                    <p>{el.ep_data.map((item,index)=>{
                    return <div>
                        {index !== 0 ?<p>{item}</p>:<p>{item}</p>}
                    </div>;
                })}</p>
                </div>)
            })}
        </div>
    )
}

export default Content;