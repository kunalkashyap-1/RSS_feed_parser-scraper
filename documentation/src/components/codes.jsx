const Code ={
js_fetch :`const fetch = require('node-fetch');

const url = 'https://Dummy/url/path';

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));`,

  js_axios :`const axios = require("axios");

  const url = 'https://Dummy/url/path';
  
  axios.get(url)
    .then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });`,
python_req :`import requests

  url = "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D"
  
  querystring = {"units":"auto","lang":"en"}
  
  response = requests.request("GET", url, params=querystring)
  
  print(response.text)`,

  initial :{code:`console.log("Example code goes here")`,type:"javascript"}
};

export default Code;