import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    });

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComment(response.data)
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div style={{display: 'flex', width: '800px', flexWrap: 'wrap', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{marginTop: '20px', color: 'white'}}>Post ID = {params.id}</h1>
            {isLoading
                ?  <Loader/>
                : <div style={{marginTop: '20px', fontSize: '16pt', color: 'white'}}>Name: {post.id}. {post.title}</div>
            }

            <h1 style={{marginTop: '20px', marginBottom: '20px', color: 'white'}}>
                Comments
            </h1>

            {isComLoading
                ? <Loader/>
                : <div style={{display: 'flex' , flexDirection: 'column', border: '2px solid teal', borderRadius: '10px', padding: '10px', color: 'white', height: '100vh'}}>
                    {comment.map(comm =>
                        <div style={{}} key={comm.email} style={{marginTop: '15px'}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>

                        )}

                </div>
            }

        </div>
    );
};

export default PostIdPage;