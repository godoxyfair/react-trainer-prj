import React from 'react';
import {useRef} from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import Logo from "./components/Logo";
import Sticker from "./components/Sticker";
import MyInput from "./components/UI/input/MyInput";
import './components/styles/App.css';
import PostItem from "./components/PostItem";


function App() {

  const [value, setValue] = useState('MAY');


  return (
    <div className="App">
        <PostItem post={{id: 1, title: 'My Title', body: 'Description' }}/>
    </div>
  );
}

export default App;
