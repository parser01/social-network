import classes from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import PublishedPosts from "./PublishedPosts/PublishedPosts";

const MyPosts = () => {
    return (
        <div className={classes.myPosts}>
            <NewPost />
            <PublishedPosts />
        </div>
    );
};

export default MyPosts;