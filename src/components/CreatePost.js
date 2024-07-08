import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ title, content }));
        navigate('/');
    };

    return (
        <div className="create-post-container">
            <div className="create-post-card">
                <form onSubmit={handleSubmit}>
                    <h1>Create Post</h1>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                    <textarea 
                        rows={8}
                        placeholder="Content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                    />
                    <div className='btn-cont'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;