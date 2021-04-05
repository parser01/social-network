import classes from "./NewPost.module.css";
import React from "react";

const NewPost = (props) => {
    let newPostInput = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let typeNewPostText = () => {
        let newPostText = newPostInput.current.value;
        props.typeNewPostText(newPostText);
    };

    return (
        <div className={classes.newPost}>
            <textarea ref={newPostInput} placeholder="Type your post..." value={props.newPostText} onChange={typeNewPostText} />
            <button type="button" onClick={addPost}>Post</button>
        </div>
    );
};

export default NewPost;