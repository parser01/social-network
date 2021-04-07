import classes from "./DialogItem.module.css";
import MyMessage from "./MyMessage/MyMessage";
import NotMyMessage from "./NotMyMessage/NotMyMessage";

const DialogItem = (props) => {
    if (props.isMyMessage) {
        return (
            <div className={classes.dialogItem}>
                <MyMessage message={props.message} />
            </div>
        );
    } else {
        return (
            <div className={classes.dialogItem}>
                <NotMyMessage message={props.message} />
            </div>
        );
    }
};

export default DialogItem;