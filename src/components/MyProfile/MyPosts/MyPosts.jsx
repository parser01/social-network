import classes from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import PublishedPosts from "./PublishedPosts/PublishedPosts";

const MyPosts = (props) => {
    return (
        <div className={classes.myPosts}>
            <NewPost typeNewPostText={props.typeNewPostText} addPost={props.addPost} newPostText={props.newPostText} />
            <PublishedPosts postsData={props.postsData} />
        </div>
    );
};

export default MyPosts;