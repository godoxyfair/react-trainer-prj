import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
//import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route path="*" element={<About/>}/>
            <Route exact path="/posts/:id" element={<PostIdPage/>}/>
        </Routes>
    );
};

export default AppRouter;