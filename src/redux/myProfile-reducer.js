const TYPE_NEW_POST_TEXT = "TYPE-NEW-POST-TEXT",
   ADD_POST = "ADD-POST";

const initialState = {
   postsData: [
      { id: 1, message: "I am working right now!", likesNumber: 8 },
      { id: 2, message: "It is so cool", likesNumber: 11 },
      { id: 3, message: "Wolverine", likesNumber: 35 }
   ],

   newPostText: "Panama",

   myFriendsData: [
      { id: 1, myFriendName: "Cameron" },
      { id: 2, myFriendName: "Thomas" },
      { id: 3, myFriendName: "Jack" },
      { id: 4, myFriendName: "Samantha" },
      { id: 5, myFriendName: "Tracy" }
   ]
};

const myProfileReducer = (state = initialState, action) => {
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