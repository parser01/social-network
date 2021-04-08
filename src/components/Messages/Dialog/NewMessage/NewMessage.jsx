import classes from "./NewMessage.module.css";
import React from "react";

const NewMessage = (props) => {
    let input = React.createRef();

    let typeNewMessageText = () => {
        let newMessageText = input.current.value;
        props.dispatch({
            type: "TYPE-NEW-MESSAGE-TEXT",
            newMessageText: newMessageText
        });

    };

    let addMessage = () => props.dispatch(
        { type: "ADD-MESSAGE", id: props.id }
    );

    return (
        <div className={classes.newMessage}>
            <input ref={input} type="text" placeholder="Type a message here" value={props.newMessageText} onChange={typeNewMessageText} />
            <button type="button" onClick={addMessage}>Send</button>
        </div>
    );
};

export default NewMessage;