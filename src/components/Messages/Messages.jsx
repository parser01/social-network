import classes from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Dialog from "./Dialog/Dialog";

const Messages = () => {
    return (
        <div className={classes.messages}>
            <Dialogs />
            <Dialog />
        </div>
    );
};

export default Messages;