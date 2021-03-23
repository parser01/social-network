import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <DialogsItem interlocutorName="Clara" id="1" />
            <DialogsItem interlocutorName="Jack" id="2" />
            <DialogsItem interlocutorName="Frank" id="3" />
            <DialogsItem interlocutorName="Nicole" id="4" />
            <DialogsItem interlocutorName="Olivia" id="5" />
            <DialogsItem interlocutorName="John" id="6" />
            <DialogsItem interlocutorName="Tom" id="7" />
            <DialogsItem interlocutorName="Harry" id="8" />
        </div>
    );
};

export default Dialogs;