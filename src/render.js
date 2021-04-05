import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, typeNewPostText, typeNewMessageText} from "./redux/state"; 

export let rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} typeNewPostText={typeNewPostText} 
                addMessage={addMessage} typeNewMessageText={typeNewMessageText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};