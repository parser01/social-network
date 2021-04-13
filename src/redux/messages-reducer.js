const TYPE_NEW_MESSAGE_TEXT = "TYPE-NEW-MESSAGE-TEXT",
    ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
    dialogsItemsData: [
        { id: 1, interlocutorName: "Clara" },
        { id: 2, interlocutorName: "Jack" },
        { id: 3, interlocutorName: "Frank" },
        { id: 4, interlocutorName: "Nicole" },
        { id: 5, interlocutorName: "Olivia" },
        { id: 6, interlocutorName: "John" },
        { id: 7, interlocutorName: "Tom" },
        { id: 8, interlocutorName: "Harry" }
    ],

    dialogsData: [
        {
            id: 1,

            messagesData: [
                { id: 1, message: "Hi", myMessage: true },
                { id: 2, message: "How are you?", myMessage: true },
                { id: 3, message: "Hey, I am fine. Thanks", myMessage: false },
                { id: 4, message: "So, why did you write to me?", myMessage: false },
                { id: 5, message: "Do you know what happened to Jane?", myMessage: true },
                { id: 6, message: "Yeah", myMessage: false },
                { id: 7, message: "Of corse", myMessage: false },
                { id: 8, message: "She is married", myMessage: false },
                { id: 9, message: "It is great. ", myMessage: true },
                { id: 10, message: "Thanks", myMessage: true },
                { id: 11, message: "Bye", myMessage: true }
            ]
        },

        {
            id: 2,

            messagesData: [
                { id: 1, message: "Hey", myMessage: true },
                { id: 2, message: "Who is it?", myMessage: false },
                { id: 3, message: "It's me.", myMessage: true },
                { id: 4, message: "Carl", myMessage: true },
                { id: 5, message: "Hey Carl", myMessage: false },
                { id: 6, message: "How are you", myMessage: false },
                { id: 7, message: "I am fine, thanks", myMessage: true },
                { id: 8, message: "Let's go to the street", myMessage: true },
                { id: 5, message: "Ok", myMessage: false }
            ]
        },

        {
            id: 3,

            messagesData: [
                { id: 1, message: "How are you Frank", myMessage: true },
                { id: 2, message: "Thanks, Carl", myMessage: false },
                { id: 3, message: "What are you doing right now?", myMessage: true },
                { id: 4, message: "I am good. I am working right now. I don't have time. Sorry. We can chat tommorrow", myMessage: false },
                { id: 5, message: "Ok. See you tomorrow. Bye", myMessage: true },
                { id: 6, message: "Bye", myMessage: false }
            ]
        },

        {
            id: 4,

            messagesData: [
                { id: 1, message: "Hi", myMessage: false },
                { id: 2, message: "Carl", myMessage: false },
                { id: 3, message: "I miss you so much", myMessage: false },
                { id: 4, message: ".", myMessage: true },
                { id: 5, message: "I know", myMessage: true },
                { id: 6, message: "I'll come tomorrow to see you", myMessage: true }
            ]
        },

        {
            id: 5,

            messagesData: [
                { id: 1, message: "Hi ", myMessage: true },
                { id: 2, message: "Olivia", myMessage: true }
            ]
        },

        {
            id: 6,

            messagesData: [
                { id: 1, message: "new trailer of spiderman", myMessage: true },
                { id: 2, message: "It is cool", myMessage: true },
                { id: 3, message: "Yeah", myMessage: false },
                { id: 4, message: "I know", myMessage: false }
            ]
        },

        {
            id: 7,

            messagesData: [
                { id: 1, message: "Hey", myMessage: false },
                { id: 2, message: "Carl", myMessage: false },
                { id: 3, message: "Where are you? We are waiting you", myMessage: false }
            ]
        },

        {
            id: 8,

            messagesData: [
                { id: 1, message: "Are you ready", myMessage: true },
                { id: 2, message: "Yes", myMessage: false },
                { id: 3, message: "We must do it right now", myMessage: true },
                { id: 4, message: "Yes", myMessage: false },
                { id: 5, message: "It is our last chance", myMessage: true },
                { id: 6, message: "Yeah", myMessage: false }
            ]
        }
    ],

    newMessageText: ""
};

const messagesReducer = (state = initialState, action) => {
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