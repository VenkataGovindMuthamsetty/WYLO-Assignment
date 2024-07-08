
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<PostsDisplay />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/edit/:id" element={<EditPost />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
