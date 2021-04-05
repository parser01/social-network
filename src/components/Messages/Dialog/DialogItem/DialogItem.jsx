import classes from "./DialogItem.module.css";
import MyMessage from "./MyMessage/MyMessage";
import NotMyMessage from "./NotMyMessage/NotMyMessage";

const DialogItem = (props) => {
    if (props.isMyMessage) {
        return (
            <div className={classes.dialogItem}>
                <MyMessage id={props.id} message={props.message} />
            </div>
        );
    } else {
        return (
            <div className={classes.dialogItem}>
                <NotMyMessage id={props.id} message={props.message} />
            </div>
        );
    }
};

export default DialogItem;