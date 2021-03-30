import classes from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <Dialogs dialogsItemsData={props.messages.dialogsItemsData} />
            <Dialog messagesData={props.messages.messagesData} />
        </div>
    );
};

export default Messages;