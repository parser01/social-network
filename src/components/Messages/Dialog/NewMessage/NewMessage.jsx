import classes from "./NewMessage.module.css";
import React from "react";
import { typeNewMessageTextActionCreator, addMessageActionCreator } from '../../../../redux/messages-reducer';


const NewMessage = (props) => {
    // let input = React.createRef();

    let typeNewMessageText = (event) => {
        // let newMessageText = input.current.value;
        let newMessageText = event.target.value;
        props.dispatch(typeNewMessageTextActionCreator(newMessageText));
    };

    let addMessage = () => props.dispatch(addMessageActionCreator(props.id));

    return (
        <div className={classes.newMessage}>
            <input /* ref={input} */ type="text" placeholder="Type a message here"
                value={props.newMessageText} onChange={typeNewMessageText} />
            <button type="button" onClick={addMessage}>Send</button>
        </div>
    );
};

export default NewMessage;