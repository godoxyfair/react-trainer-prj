import './styles/App.css';
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import Navbar from "./components/UI/Navbar/Navbar";
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
