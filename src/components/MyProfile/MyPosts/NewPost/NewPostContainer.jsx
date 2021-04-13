import NewPost from "./NewPost";
import { addPostActionCreator, typeNewPostTextActionCreator } from './../../../../redux/myProfile-reducer';

const NewPostContainer = (props) => {
   const state = props.store.getState();

   const addPost = () => props.store.dispatch(addPostActionCreator());

   const typeNewPostText = (newPostText) => props.store.dispatch(typeNewPostTextActionCreator(newPostText));

   return <NewPost newPostText={state.myProfile.newPostText} typeNewPostText={typeNewPostText} addPost={addPost} />;
};

export default NewPostContainer;