// import { useEffect, useState } from "react";
import Header from "./components/navbar";
import Footer from "./components/footer";
import Content from "./components/content"
import './App.css';

function App() {
  // const [api_data,setData] = useState();

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8383/feeds/top_stories")
  //     .then((response) => response.json())
  //     .then((res) => setData(res))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div>
      <Header />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
