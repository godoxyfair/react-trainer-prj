import React from 'react';
import classes from "./MyButtton.module.css";

const MyButton = ({children,...props}) => {
    return (
        //special props children when I take a button value from App.js
        <button disabled={true} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;