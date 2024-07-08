import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';
import './PostsDisplay.css';

const PostsDisplay = () => {
    const posts = useSelector(state => state.posts);

    return (
        <div className='home-cont'>
            <h1>Posts</h1>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
            <Link className='create-post' to="/create">Create New Post</Link>
        </div>
    );
};

export default PostsDisplay;