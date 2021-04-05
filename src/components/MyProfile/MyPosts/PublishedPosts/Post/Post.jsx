import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            {props.message}
            <div>{props.likesNumber}</div>
        </div>
    );
};

export default Post;