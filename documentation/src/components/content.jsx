import Examples from "./Examples";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


function Content() {
    return (
        <div className="content">
            <div className="heroSection">
                <img alt="icon" src="./rss_icon.png" />
                <div className="details">
                    <h1>RSS eases tracking news from favorite sources.</h1>
                    <p>RSS (Really Simple Syndication) feeds are a standardized format used for publishing and
                        distributing frequently updated content, such as news articles, blog posts, and podcasts.RSS feeds typically include the title, summary, and link to each article or post,
                        and can be customized to include specific categories or topics of interest. This makes it easy
                        for users to stay up-to-date with their favorite websites and topics.</p>
                </div>
            </div>
            <div className="intro" id="into">
                <h1>Introduction</h1>
                <hr />
                <p>The API provides a simple RESTful interface that can be easily integrated into any
                    programming language or framework. This allows developers to focus on building their
                    applications rather than worrying about the technical details of retrieving news
                    content. Additionally, RSS feed parser API provides extensive documentation and support, making it
                    easy for developers to get started and troubleshoot any issues that may arise.
                    Welcome to the RSS feed parser API! This API allows you to retrieve news articles from a variety
                    of sources, providing you with a rich collection of up-to-date news content. You can
                    use the API to access news articles from a range of different categories, including
                    sports, politics, business, and more.
                </p>
                <br />
                <h1>Getting Started</h1>
                <hr />
                <p>The RSS Feed parser API is very simple to use and requires no API key to get started.
                    You can start making requests to the API right away.</p>
                <ol>
                    <li>If you're interested in using the RSS feed parser API, you're in luck! No sign in or API key
                        is required to start using the API. You can immediately begin making requests to
                        access the news data you need without any additional setup or authentication.</li>
                    <li>Choose an endpoint: The RSS feed parser API offers several endpoints, each of which provides
                        a different type of news data. Choose the endpoint that best suits your needs and read
                        the API documentation to learn about the parameters you can use to refine your requests.</li>
                    <li>Make a request: Once you have your API key and have chosen an endpoint, you can make
                        a request using your preferred programming language. The RSS feed parser API supports several
                        programming languages, including JavaScript, Python, and Ruby.</li>
                    <li>Parse the response: The RSS feed parser API will return a response in JSON format.
                        You will need to parse this response to extract the data you need.</li>
                    <li>Display the data: Finally, you can display the data on your website or application
                        using your preferred front-end framework. The RSS feed parser API does not provide any front-end
                        components, so you will need to build your own interface to display the data.</li>
                </ol>
                <br />
                <h1 id="endpoint">Endpoints</h1>
                <hr />
                <p>An endpoint is an access point to send the HTTP requests to and get your response.
                    RSS feed parser API offers these following endpoints:</p>
                <div className="endpoints">
                    <p>
                        <h3>-{`>`} Search for Articles</h3>
                        <SyntaxHighlighter language="markdown" style={okaidia} >
                            GET http://localhost:3000/search/[topic]
                        </SyntaxHighlighter>
                    </p>
                    <p>This would return a JSON object containing the search results for articles about
                        [topic] with each article represented as a separate object within the array.</p>
                    <p> The server sends this JSON object as the response to the
                        client that made the request.
                    </p>
                    <br />

                    <p>
                        <h3>-{`>`} Articles Types</h3>
                        <SyntaxHighlighter language="markdown" style={okaidia} >
                            GET http://localhost:3000/feeds/[article-type]
                        </SyntaxHighlighter>
                    </p>
                    <p>This endpoint retrieves news articles from a specified news source and
                        returns them as a JSON object.</p>
                    <p>
                        Article-Type: -  top_stories, latest_feeds, most_read, most_shared
                    </p>
                    <br />
                    <p>
                        <h3>-{`>`} Articles by categories or locations</h3>
                        <SyntaxHighlighter language="markdown" style={okaidia} >
                            GET http://localhost:3000/c1/[parameter]
                        </SyntaxHighlighter>
                    </p>
                    <p>The endpoint retrieves news articles from a specific category of a news source
                        and returns them as a JSON object. When a GET request is made to this endpoint,
                        the server gets the name of the category from the URL and retrieves the RSS feed
                        URL for that category from the news source. It then gets the articles from the RSS
                        feed URL and returns them as a JSON object.
                    </p>
                    <p>Parameter -{`>`} Category:- education, tech, entertainment, cricket</p>
                    <p>Parameter -{`>`} Location:- india, us, uk, middle_east, delhi, mumbai, varanasi, bangalore</p>
                </div>
                <h1 id="example" >Examples</h1>
                <hr />
                <p>These are some examples in some commonly used languages to show you how you could implement RSS Paarse:</p>
                <p>
                    <Examples />
                </p>
            </div>
        </div>
    )
}

export default Content;