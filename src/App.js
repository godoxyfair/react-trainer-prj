import React from 'react';
import {useRef} from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import Logo from "./components/Logo";



function App() {

  const [value, setValue] = useState('MAY');



  return (
    <div className="App">
        <Counter/>
        <Counter/>
    </div>
  );
}

export default App;
