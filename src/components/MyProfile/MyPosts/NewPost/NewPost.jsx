import classes from "./NewPost.module.css";
import React from "react";
import { addPostActionCreator, typeNewPostTextActionCreator } from "../../../../redux/store";

const NewPost = (props) => {
    let newPostInput = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let typeNewPostText = () => {
        let newPostText = newPostInput.current.value;
        props.dispatch(typeNewPostTextActionCreator(newPostText));
    };

    return (
        <div className={classes.newPost}>
            <textarea ref={newPostInput} placeholder="Type your post..." value={props.newPostText}
                onChange={typeNewPostText} />
            <button type="button" onClick={addPost}>Post</button>
        </div>
    );
};

export default NewPost;