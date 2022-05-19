import React from 'react';
import {useRef} from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import Logo from "./components/Logo";
import Sticker from "./components/Sticker";
import MyInput from "./components/UI/input/MyInput";
import './components/styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'My Title', body: 'Description' },
        {id: 2, title: 'My Title', body: 'Description' },
        {id: 3, title: 'My Title', body: 'Description' },
        {id: 4, title: 'My Title', body: 'Description' }
    ])


  return (
    <div className="App">
        <form>
            <input
                type='text'
                placeholder="Name"
            />
            <input
                type='text'
                placeholder="Description"
            />
           <MyButton>Create</MyButton>
        </form>
        <PostList posts={posts} title='Posts List 1'/>

    </div>
  );
}

export default App;
