import classes from "./Dialog.module.css";
import Message from "./Message/Message";

const Dialog = (props) => {
    let messages = props.messagesData.map(i => <Message message={i.message} />);

    return (
        <div className={classes.dialog}>
            {messages}
        </div>
    );
};

export default Dialog;