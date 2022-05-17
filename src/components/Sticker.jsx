
import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import classes from "./Sticker.module.css";

const Sticker = () => {
    const [text, setText] = useState('Description');
    const [head, setHead] = useState('Enter Head')

    return (
        <div className={classes.mySticker}>
            <h1>Enter head</h1>
            <MyInput type="text"
                     placeholder="Head"/>
            <h1>Description</h1>
            <MyInput type="text"
                     placeholder="Your Minds"/>
            <MyButton/>
        </div>
    );
};

export default Sticker;