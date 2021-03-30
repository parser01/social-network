import classes from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import PublishedPosts from "./PublishedPosts/PublishedPosts";

const MyPosts = (props) => {
    return (
        <div className={classes.myPosts}>
            <NewPost />
            <PublishedPosts postsData={props.postsData} />
        </div>
    );
};

export default MyPosts;