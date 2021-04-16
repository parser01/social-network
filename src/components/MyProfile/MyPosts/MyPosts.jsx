import classes from "./MyPosts.module.css";
import NewPostContainer from "./NewPost/NewPostContainer";
import PublishedPosts from "./PublishedPosts/PublishedPosts";

const MyPosts = (props) => {
    return (
        <div className={classes.myPosts}>
            <NewPostContainer /* store={props.store} */ />
            <PublishedPosts postsData={props.postsData} />
        </div>
    );
};

export default MyPosts;