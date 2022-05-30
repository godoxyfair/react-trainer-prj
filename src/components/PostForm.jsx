import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

//вызов props create из app для добавления в конец массива постов ноаого поста
const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        //this is a very important construction. we take an older array post like "posts"
        // and add a new post in the end with "newPost" object
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange = {e => setPost({...post, title: e.target.value})}
                type='text'
                placeholder="Name"
            />
            <br/>
            <MyInput
                value={post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder="Description"
            />
            <br/>
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;