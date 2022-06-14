import './styles/App.css';
import {BrowserRouter as Router, HashRouter} from "react-router-dom";
import React from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    //Router use with normal server but GitHub use HashRouter for good router-dom work
    return (
                <HashRouter>
                    <Navbar/>
                    <AppRouter/>
                </HashRouter>
    );
}

export default App;
