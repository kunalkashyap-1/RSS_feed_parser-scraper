const axios = require('axios');
const cheerio = require('cheerio');


// Function to scrape the data
module.exports = async function (link) {
  try {
    // Fetch the RSS feed
    const response = await axios.get(link);

    // Load the XML response into Cheerio
    const $ = cheerio.load(response.data, { xmlMode: true });

    // Initialize an array to store the scraped data
    const data = [];

    // Find all the items in the RSS feed
    $('item').each((index, element) => {
      // Extract the required data from each item
      const title = $(element).find('title').text();
      const imageUrl = $(element).find('media\\:content').attr('url');
      const content = $(element).find('description').text();
      const link = $(element).find('link').text();
      const publishedAt = $(element).find('pubDate').text();

      // Create an object with the extracted data
      const Data = {
        title: title,
        imageUrl: imageUrl,
        content: content,
        link: link,
        publishedAt: publishedAt
      };

      // Add the object to the array
      data.push(Data);
    });

    // Log the scraped data
    return {data};
  } catch (error) {
    console.error('Error:', error);
  }
}
