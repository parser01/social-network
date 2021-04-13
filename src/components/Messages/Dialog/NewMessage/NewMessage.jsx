import classes from "./NewMessage.module.css";
import React from "react";
import { typeNewMessageTextActionCreator, addMessageActionCreator } from '../../../../redux/messages-reducer';


const NewMessage = (props) => {
    // let input = React.createRef();

    const typeNewMessageText = (event) => {
        // let newMessageText = input.current.value;
        const newMessageText = event.target.value;
        // props.dispatch(typeNewMessageTextActionCreator(newMessageText));
        props.typeNewMessageText(newMessageText);
    };

    const addMessage = () => { 
        // props.dispatch(addMessageActionCreator(props.id));
        props.addMessage();
    }

    return (
        <div className={classes.newMessage}>
            <input /* ref={input} */ type="text" placeholder="Type a message here"
                value={props.newMessageText} onChange={typeNewMessageText} />
            <button type="button" onClick={addMessage}>Send</button>
        </div>
    );
};

export default NewMessage;