const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function (rss_link) {

    const response = await axios.get(rss_link);
    const $ = cheerio.load(response.data);

    const [titles, imageUrls, links, contents] = await Promise.all([
        Promise.resolve($(".Mc7GB .EW1Mb").map((i, el) => $(el).text()).get()),
        Promise.resolve($(".Mc7GB a>figure > div > img").map((i, el) => $(el).attr("src")).get()),
        Promise.resolve($(".Mc7GB a").map((i, el) => $(el).attr("href")).get()),
        Promise.resolve($(".Mc7GB p").map((i, el) => $(el).text()).get())
    ]);

    const data = titles.map((title, i) => ({
        title,
        imageUrl: imageUrls[i],
        content: contents[i],
        link: links[i],
    }));

    // console.log(data);
    return data;
}