import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
    let dialogsItems = props.dialogsItemsData.map(i => <DialogsItem interlocutorName={i.interlocutorName} id={i.id} />);

    return (
        <div className={classes.dialogs}>
            <h2>Messages</h2>
            { dialogsItems }
        </div>
    );
};

export default Dialogs;