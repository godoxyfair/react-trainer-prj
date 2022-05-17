import React from 'react';
import {useRef} from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import Logo from "./components/Logo";
import Sticker from "./components/Sticker";
import MyInput from "./components/UI/input/MyInput";



function App() {

  const [value, setValue] = useState('MAY');


  return (
    <div className="App">
        <h1>Sticker App</h1>
        <Sticker/>

    </div>
  );
}

export default App;
