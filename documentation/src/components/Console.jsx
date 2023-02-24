import { useState, useEffect } from "react";
import { Prism } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


function Console() {
    const urls={initial:"http://example.domain:Port/path/",
    search:"http://localhost:8383/search/",
    stat:"http://localhost:8383/feeds/",
    category:"http://localhost:8383/c1/"
    }
    
    const [param, setParam] = useState(``);
    const [endpoint, setEndpoint] = useState(`${urls.initial}{parameter}`);
    const [submit, setSubmit] = useState(0);
    const [option, setOption] = useState("Select an option");
    const [api_data, setData] = useState({
        "title": "Example news title of Article",
        "imageUrl": "https://psuedoPhoto.com/photo",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac mauris tristique, ultrices dui quis, ornare neque. Nullam pulvinar velit id massa volutpat ultricies. Pellentesque venenatis aliquet nunc et vulputate. Ut consectetur maximus turpis, vitae accumsan lacus. Cras eu tempor est. ",
        "link": "https://pseudoLink.com/city?q=example.cms",
        "publishedAt": "Day, Date Month Year Time"
    });

    const selectHandler = (event)=>{
        setEndpoint(`${urls[event.target.value]}{parameter}`);
        setOption(event.target.value);
    };

    useEffect(() => {
        // console.log(endpoint);
        submit === 1 ? fetch(endpoint)
            .then((response) => response.json())
            .then((res) => {
                // console.log(res);
                setData(res);
                setSubmit(0);
            })
            .catch((error) => console.error(error)) : <></>;

    }, [submit]);

    function OnSubmit(event) {
        event.preventDefault();
        setSubmit(1);
    }


    return (<div className="console_local">
        <form>
            <h1>Test Parse Live</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Endpoints</td>
                        {/* <td>{endpoint}</td> */}
                        <td>
                        <select value={option} onChange={selectHandler}>
                            <option value="initial">Select an option</option>
                            <option value="search">Search for Article</option>
                            <option value="stat">Article Type</option>
                            <option value="category">Article by Location</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>URL</td>
                        <td>{endpoint}</td>
                    </tr>
                    <tr>
                        <td>Parameter</td>
                        <td><input
                            type="text"
                            placeholder="Enter parameters"
                            value={param}
                            onChange={(event) => {
                                const val = event.target.value;
                                setParam(event.target.value);
                                setEndpoint(`${urls[option]}${val.length !== 0 ? val : `{parameter}`}`);
                                // console.log(event.target.value);
                            }} /></td>
                    </tr>
                    <tr>
                        <td>HTTP Method</td>
                        <td>GET</td>
                    </tr>
                    <tr>
                        <td>Amount</td>
                        <td>this will be the amount once backend is ready for it </td>
                    </tr>
                    <tr>
                        <td><input type="submit" onClick={OnSubmit} value="Try it" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
        <div id="response">
            <h1>Response</h1>
            <Prism language="json" style={okaidia}>
                {JSON.stringify(api_data, null, 2)}
            </Prism>
        </div>
    </div>)
}

export default Console;