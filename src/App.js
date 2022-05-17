import React from 'react';
import {useRef} from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import Logo from "./components/Logo";
import Sticker from "./components/Sticker";
import MyInput from "./components/UI/input/MyInput";
import './components/styles/App.css';


function App() {

  const [value, setValue] = useState('MAY');


  return (
    <div className="App">
        <div className="post">
            <div className="post__counter">
                <strong>1. New stick</strong>
                <div>
                    New stick description
                </div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>

    </div>
  );
}

export default App;
