import { useState, useEffect } from "react";
import { Prism } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button, NativeSelect, TextField, Input } from '@mui/material';


function Console() {
    const urls = {
        Parameter: "http://example.com/path/",
        Search: "http://localhost:8383/search/",
        Stat: "http://localhost:8383/feeds/",
        Location: "http://localhost:8383/c1/"
    }

    const [endpoint, setEndpoint] = useState(`${urls.Parameter}`);
    const [submit, setSubmit] = useState(0);
    const [limit, setLimit] = useState(0);
    const [param, setParam] = useState(`{parameter}`);
    const [option, setOption] = useState("Parameter");
    const [api_data, setData] = useState({
        "title": "Example news title of Article",
        "imageUrl": "https://psuedoPhoto.com/photo",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac mauris tristique, ultrices dui quis, ornare neque. Nullam pulvinar velit id massa volutpat ultricies. Pellentesque venenatis aliquet nunc et vulputate. Ut consectetur maximus turpis, vitae accumsan lacus. Cras eu tempor est. ",
        "link": "https://pseudoLink.com/city?q=example.cms",
        "publishedAt": "Day, Date Month Year Time"
    });

    const selectHandler = (event) => {
        setEndpoint(`${urls[event.target.value]}`);
        setOption(event.target.value);
    };

    useEffect(() => {
        // console.log(endpoint);
        submit === 1 ? fetch(`${endpoint}${param}${limit > 0 ? `?limit=${limit}` : ""}`)
            .then((response) => response.json())
            .then((res) => {
                // console.log(res);
                setData(res);
                setSubmit(0);
            })
            .catch((error) => console.error(error)) : <></>;

    },
        // eslint-disable-next-line
        [submit]);

    function OnSubmit(event) {
        event.preventDefault();
        setSubmit(1);
    }


    return (<div className="console_local">
        <form>
            <h1>Test Parser Live</h1>
            <table>
                <tbody>
                    <tr>
                        <td>API Reference</td>
                        <td>
                            <NativeSelect
                                // defaultValue={option}
                                value={option}
                                sx={{ width: 300 }}
                                onChange={selectHandler}
                            >
                                <option value="Parameter">Select an option</option>
                                <option value="Search">Search for Article</option>
                                <option value="Stat">Article Type</option>
                                <option value="Location">Article by Location</option>
                            </NativeSelect>
                        </td>
                    </tr>
                    <tr>
                        <td>Endpoint</td>
                        <td>
                            <TextField
                                type='text'
                                value={`${endpoint}${param}${limit>0?`?limit=${limit}`:""}`}
                                sx={{width:300}}
                                size="small"
                                variant='outlined'
                                inputProps={
                                    { readOnly: true, }
                                }/>
                            </td>
                    </tr>
                    <tr>
                        <td>Parameter</td>
                        <td>
                            <TextField
                                id="outlined-basic"
                                size="small"
                                sx={{ width: 300 }}
                                label={option}
                                variant="outlined"
                                onChange={(event) => {
                                    const val = event.target.value;
                                    setParam(`${val.length !== 0 ? val : `{parameter}`}`);
                                }} />
                        </td>
                    </tr>
                    <tr>
                        <td>HTTP Method</td>
                        <td>
                        <TextField
                                type='text'
                                value="GET"
                                sx={{width:300}}
                                disabled={true}
                                size="small"
                                variant='outlined'
                                inputProps={
                                    { readOnly: true, }
                                }/>
                        </td>
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>
                            <Input
                                type="number"
                                value={limit}
                                sx={{ width: 300 }}
                                onChange={(event) => {
                                    const amt = event.target.value;
                                    setLimit(amt > -1 ? amt : 0);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        {/* <input type="submit" onClick={OnSubmit} value="Try it" /> */}
                        <td><Button variant="contained" color="success" onClick={OnSubmit}>
                            Try it
                        </Button>
                        </td>
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