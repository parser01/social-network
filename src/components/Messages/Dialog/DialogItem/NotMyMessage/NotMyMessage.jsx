import classes from "./NotMyMessage.module.css";

const NotMyMessage = (props) => {
    return (
        <div className={classes.notMyMessage}>{ props.message }</div>
    );
};

export default NotMyMessage;