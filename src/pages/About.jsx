import React from 'react';

const About = () => {
    return (
        <div style={{ width: '800px',display: 'flex' , flexWrap: 'wrap',justifyContent: 'center', height: '100vh'}}>
            <h1 style={{marginTop: '20px', color: 'white'}}>About</h1>
            <div style={{fontSize:'18pt', marginTop: '20px', lineHeight: '1.5', padding: '10px', color: 'white'}}>
                I made this project as a React learning project. In it I used react-router-dom.
                The application loads information into posts with JSON Placeholder, splits all loaded posts into 10 pages. Each post can be deleted and comments to it can be viewed.
                You can also create a new post and add it to the page.
                The application implements post sorting and search.
                The application is decomposed into various React components.
            </div>
        </div>

    );
};

export default About;