// import { useEffect, useState } from "react";
import Header from "./components/navbar";
import Footer from "./components/footer";
import Content from "./components/content";
import Console from "./components/Console";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
    <div>
      <Header />
        <Routes>
          <Route exact path="/" element={<Content />}/>
          <Route exact path="/Console" element={<Console/>}/>
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
