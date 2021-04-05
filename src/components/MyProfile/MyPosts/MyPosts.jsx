import classes from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import PublishedPosts from "./PublishedPosts/PublishedPosts";

const MyPosts = (props) => {
    return (
        <div className={classes.myPosts}>
            <NewPost addPost={props.addPost} newPostText={props.newPostText} typeNewPostText={props.typeNewPostText} />
            <PublishedPosts postsData={props.postsData} />
        </div>
    );
};

export default MyPosts;