import React from 'react';

const About = () => {
    return (
        <div style={{ width: '800px',display: 'flex' , flexWrap: 'wrap',justifyContent: 'center', height: '100vh'}}>
            <h1 style={{marginTop: '20px', color: 'white'}}>About</h1>
            <div style={{fontSize:'18pt', marginTop: '20px', lineHeight: '1.5', padding: '10px', color: 'white'}}>
                I did this project while learning React. I implemented it with react-router-dom.
                The app uploads information to the posts using JSON Placeholder, splits all the uploaded posts into 10 pages.
                Each post can be deleted and comments on it can be viewed. You can also create a new post and add it to the page.
                Sorting and searching is implemented in the app. The application is decomposed into different components of React.
            </div>
        </div>

    );
};

export default About;