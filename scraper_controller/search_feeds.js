const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function (rss_link){
    const response = await axios.get(rss_link);
    const $ = cheerio.load(response.data);

    $("._36sW1").each((i,el)=>{
        console.log($(el).text());
    });
}