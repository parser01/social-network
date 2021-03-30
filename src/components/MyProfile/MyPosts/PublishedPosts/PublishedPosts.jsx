import classes from "./PublishedPosts.module.css";
import Post from "./Post/Post";

const PublishedPosts = (props) => {
    let posts = props.postsData.map(i => <Post message={i.message} id={i.id} />);

    return (
        <div className={classes.publishedPosts}>
            {posts}
        </div>
    );
};

export default PublishedPosts;