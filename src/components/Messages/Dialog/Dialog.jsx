import classes from "./Dialog.module.css";
import Message from "./Message/Message";

const Dialog = () => {
    return (
        <div className={classes.dialog}>
            <Message message="Hi" />
            <Message message="Wait" />
            <Message message="What's the problem?" />
            <Message message="Where are you?" />
            <Message message="hehehehe" />
        </div>
    );
};

export default Dialog;