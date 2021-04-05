import classes from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";

const Dialog = (props) => {
    let messages = props.dialogsDataItem.messagesData.map(i => <DialogItem message={i.message} isMyMessage={i.myMessage} />);

    return (
        <div className={classes.dialog}>
            <div>{props.interlocutorName}</div>
            <div>
                {messages}
            </div>
            <NewMessage newMessageText={props.newMessageText} typeNewMessageText={props.typeNewMessageText} addMessage={props.addMessage} id={props.id} />
        </div>
    );
};

export default Dialog;