import {Link} from "react-router-dom";

function Header() {
    return (<nav>
        <h1>
        <img alt="logo" src="./logo192.png" />
        <Link to="/">RSS Parser</Link>
        </h1>
        <div >
            <a className="anchor" href="/#into">Quick guide</a>
            <a className="anchor" href="/#endpoint">Endpoints</a>
            <Link className="anchor" to="/Console">Console</Link>
            <a className="anchor" href="/#example">Examples</a>
            <a className="anchor" href="https://github.com/kunalkashyap-1/news-api_scraper">Git hub</a>
        </div>
    </nav>);
}

export default Header;