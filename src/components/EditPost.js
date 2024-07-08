import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../redux/postsSlice';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPost.css';

const EditPost = () => {
    const { id } = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === id));
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost({ id, title, content }));
        navigate('/');
    };

    return (
        <div className="edit-post-container">
            <div className="edit-post-card">
                <form onSubmit={handleSubmit}>
                    <h1>Edit Post</h1>
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
                    <div className='btn-div'> 
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPost;