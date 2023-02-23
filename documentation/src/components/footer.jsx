const _date = new Date();

function Footer(){
    return <footer >
        <p>Made with ❤️ © Copyright {_date.getFullYear()}</p>
    </footer>
}

export default Footer;