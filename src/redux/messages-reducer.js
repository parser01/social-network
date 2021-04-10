const TYPE_NEW_MESSAGE_TEXT = "TYPE-NEW-MESSAGE-TEXT",
   ADD_MESSAGE = "ADD-MESSAGE";

const messagesReducer = (state, action) => {
   switch (action.type) {
      case TYPE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessageText;
         return state;

      case ADD_MESSAGE:
         if (state.newMessageText !== "") {
            let myMessageData = {
               id: state.dialogsData[action.id - 1]
                  .messagesData[state.dialogsData[action.id - 1]
                     .messagesData.length - 1].id + 1,
               message: state.newMessageText,
               myMessage: true
            };

            state.dialogsData[action.id - 1].messagesData.push(myMessageData);
            state.newMessageText = "";
         }
         return state;

      default:
         return state;
   }
};

export const typeNewMessageTextActionCreator = (newMessageText) => ({
   type: TYPE_NEW_MESSAGE_TEXT,
   newMessageText: newMessageText
});

export const addMessageActionCreator = (id) => ({
   type: ADD_MESSAGE,
   id: id
});

export default messagesReducer;