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

'use strict'

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'My Title', body: 'Description' },
        {id: 2, title: 'My Title', body: 'Description' },
        {id: 3, title: 'My Title', body: 'Description' },
        {id: 4, title: 'My Title', body: 'Description' }
    ])
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        //this is a very important construction. we take an older array post like "posts"
        // and add a new post in the end with "newPost" object
        setPosts([...posts, newPost])
    }

  return (
    <div className="App">
        <form>
            <MyInput
                value={title}
                onChange = {e => setTitle(e.target.value)}
                type='text'
                placeholder="Name"/>
            <MyInput
                value={body}
                onChange = {e => setBody(e.target.value)}
                type='text'
                placeholder="Description"/>
           <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
        <PostList posts={posts} title='Posts List 1'/>

    </div>
  );
}

export default App;
