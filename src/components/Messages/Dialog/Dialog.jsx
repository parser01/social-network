import classes from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import NewMessageContainer from "./NewMessage/NewMessageContainer";

const Dialog = (props) => {
    let messages = props.dialogsDataItem.messagesData.map(i => <DialogItem message={i.message}
        isMyMessage={i.myMessage} />);

    return (
        <div className={classes.dialog}>
            <div>{props.interlocutorName}</div>
            <div>
                {messages}
            </div>
            <NewMessageContainer id={props.id} store={props.store} />
        </div>
    );
};

export default Dialog;