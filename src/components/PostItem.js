import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../redux/postsSlice';
import './PostItem.css';

const PostItem = ({ post }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(post.id));
    };

    return (
        <div className='post-card'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className='foot-cont'>
            <Link className='btn-edit' to={`/edit/${post.id}`}>Edit</Link>
            <button className='btn-del' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;