import classes from "./MyMessage.module.css";

const MyMessage = (props) => {
    return (
        <div className={classes.myMessage}>
            {props.message}
        </div>
    );
};

export default MyMessage;