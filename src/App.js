import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import React from "react";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";

function App() {

    return (
                <Router>
                    <Navbar/>
                    <AppRouter/>
                </Router>
    );
}

export default App;
