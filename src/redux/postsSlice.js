import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ title, content }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                };
            }
        },
        updatePost(state, action) {
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        deletePost(state, action) {
            return state.filter(post => post.id !== action.payload);
        }
    }
});

export const { addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;