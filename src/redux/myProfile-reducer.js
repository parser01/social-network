const TYPE_NEW_POST_TEXT = "TYPE-NEW-POST-TEXT",
   ADD_POST = "ADD-POST";

const myProfileReducer = (state, action) => {
   switch (action.type) {
      case TYPE_NEW_POST_TEXT:
         state.newPostText = action.newPostText;
         return state;

      case ADD_POST:
         let newPostData = {
            id: 4,
            message: state.newPostText,
            likesNumber: 0
         };

         state.postsData.push(newPostData);
         state.newPostText = "";
         return state;

      default:
         return state;
   }
};

export const typeNewPostTextActionCreator = (newPostText) => ({
   type: TYPE_NEW_POST_TEXT,
   newPostText: newPostText
});

export const addPostActionCreator = () => ({
   type: ADD_POST
});

export default myProfileReducer;