import NewPost from "./NewPost";
import { addPostActionCreator, typeNewPostTextActionCreator } from './../../../../redux/myProfile-reducer';
import StoreContext from "../../../../StoreContext";

const NewPostContainer = (/* props */) => {
   return (
      <StoreContext.Consumer>
         {
            store => {
               const state = store.getState();
               const addPost = () => store.dispatch(addPostActionCreator());
               const typeNewPostText = (newPostText) => store.dispatch(typeNewPostTextActionCreator(newPostText));
               return <NewPost newPostText={state.myProfile.newPostText} typeNewPostText={typeNewPostText}
                  addPost={addPost} />
            }
         }
      </StoreContext.Consumer>
   );
   /*    const state = props.store.getState();
   
      const addPost = () => props.store.dispatch(addPostActionCreator());
   
      const typeNewPostText = (newPostText) => props.store.dispatch(typeNewPostTextActionCreator(newPostText));
   
      return <NewPost newPostText={state.myProfile.newPostText} typeNewPostText={typeNewPostText} 
      addPost={addPost} />; */
};

export default NewPostContainer;