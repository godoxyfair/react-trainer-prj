import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    //с помощью этой конструкции мы определяем добавлять класс active или не добавдять
    const rootClasses = [classes.myModal]
    if(visible === true) {
        rootClasses.push(classes.active);
    }

    //e.stopPropagation() функция слушателя событий которая не дает сработать event
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;