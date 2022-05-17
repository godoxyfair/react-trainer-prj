import React from 'react';
import classes from "./MyButtton.module.css";

const MyButton = () => {
    return (
        <div className={classes.myBtn}>
            <button>OK</button>
        </div>
    );
};

export default MyButton;