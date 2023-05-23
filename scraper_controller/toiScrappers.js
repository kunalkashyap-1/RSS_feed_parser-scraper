const axios = require("axios");
const cheerio = require("cheerio");

async function getSearch (rss_link) {

    const response = await axios.get(rss_link);
    const $ = cheerio.load(response.data);

    const [titles, imageUrls, links, contents] = await Promise.all([
        Promise.resolve($(".crmK8 .fHv_i").map((i, el) => $(el).text()).get()),
        Promise.resolve($(".crmK8 a>figure > div > img").map((i, el) => $(el).attr("src")).get()),
        Promise.resolve($(".crmK8 a").map((i, el) => $(el).attr("href")).get()),
        Promise.resolve($(".crmK8 p").map((i, el) => $(el).text()).get())
    ]);

    const data = titles.map((title, i) => ({
        title,
        imageUrl: imageUrls[i],
        content: contents[i],
        link: links[i],
    }));

    // console.log(titles);
    return { data };
}


async function getFeeds(rss_link) {
    const Title = [];
    const url = [];
    const Content = [];
    const Link = [];
    const PublishedAt = [];
    const data = [];

    try {
        const response = await axios.get(rss_link);
        const $ = cheerio.load(response.data);

        $("item").each((i, el) => {
            const title = $(el).find("title").text();
            Title.push(title);
        });

        $("item").find("link").each((i, el) => {
            Link.push(el.next.data);
        });

        $("item").find("enclosure").each((i, el) => {
            url.push($(el).attr("url"));
        });

        $("item").find("description").each((i, el) => {
            const content = el.children[0].data.replace("[CDATA[", "").replace("]]", "");
            Content.push(content);
        });


        $("item").find("pubDate").each((i, el) => {
            PublishedAt.push($(el).text());
        });


        // console.log(Title);
        // console.log(Content);

        Title.map((el, i) => {
            if (url.length > 0) {
                data.push({
                    title: el,
                    imageUrl: url[i],
                    content: Content[i],
                    link: Link[i],
                    publishedAt: PublishedAt[i]
                });
            } else {
                data.push({
                    title: el,
                    content: Content[i],
                    link: Link[i],
                    publishedAt: PublishedAt[i]
                });
            }
        });

        // console.log(data);
        return { data };
    }
    catch (err) {
        // console.log(err);
    }
}


async function getCatFeeds(rss_link) {
    const Title = [];
    const url = [];
    const Content = [];
    const Link = [];
    const PublishedAt = [];
    const data = [];

    try {
        const response = await axios.get(rss_link);
        const $ = cheerio.load(response.data);

        $("item").each((i, el) => {
            const title = $(el).find("title").text();
            Title.push(title);
        });

        $("item").find("link").each((i, el) => {
            Link.push(el.next.data);
        });

        // $("item").find("enclosure").each((i, el) => {
        //     url.push($(el).attr("url"));
        // });

        $("item").find("description").each((i, el) => {
            const cond = $(el.children[0]).text();
            // console.log(cond);
            if (cond.includes("</a>")) {
                const test = $(el.children[0]).text().split("</a>");
                const i1 = test[0].indexOf('src=') + 5;
                const i2 = test[0].length - 3;
                const src = test[0].substring(i1, i2).replace(/\"/g, '');
                url.push(src);
                const content = test[1]
                Content.push(content);
            }
            else if (cond.includes("img")) {
                const test = $(el.children[0]).text().split("/>");
                const i1 = test[0].indexOf('src=') + 5;
                const i2 = test[0].length - 2;
                const src = test[0].substring(i1, i2).replace(/\"/g, '');
                url.push(src);
                const content = test[1]
                Content.push(content);
            }
        });


        $("item").find("pubDate").each((i, el) => {
            PublishedAt.push($(el).text());
        });


        // console.log(Title);
        // console.log(Content);

        Title.forEach((el, i) => {
            if (url.length > 0) {
                data.push({
                    title: el,
                    imageUrl: url[i],
                    content: Content[i],
                    link: Link[i],
                    publishedAt: PublishedAt[i]
                });
            } else {
                data.push({
                    title: el,
                    content: Content[i],
                    link: Link[i],
                    publishedAt: PublishedAt[i]
                });
            }
        });
        // console.log(url)
        // console.log(data);
        return { data };


    }
    catch (err) {
        // console.log(err);
    }
}

module.exports = {getSearch,getFeeds, getCatFeeds};