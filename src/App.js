import './styles/App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import React from "react";
import Posts from "./pages/Posts";

function App() {

    return (
                <Router>
                    <div className="navbar">
                        <div className="navbar__links">
                            <Link to="/about">About</Link>
                            <Link to="/posts">Stickers</Link>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/posts" element={<Posts/>}/>
                    </Routes>
                </Router>
    );
}

export default App;
