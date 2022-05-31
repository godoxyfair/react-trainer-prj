import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (

            <div className="post">
                <div className="post__counter">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>Open</MyButton>
                </div>
            </div>

    );
};

export default PostItem;