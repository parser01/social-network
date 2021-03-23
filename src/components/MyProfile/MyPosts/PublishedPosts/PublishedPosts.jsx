import classes from "./PublishedPosts.module.css";
import Post from "./Post/Post";

const PublishedPosts = () => {
    return (
        <div className={classes.publishedPosts}>
            <Post message="I am working right now!"/>
            <Post message="It is so cool"/>
            <Post message="My computer is super."/>
        </div>
    );
};

export default PublishedPosts;