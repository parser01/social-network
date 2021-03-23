import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <div className={classes.dialogsItem}>
            <NavLink to={ path } activeClassName={classes.active}>{ props.interlocutorName }</NavLink>
        </div>
    );
};

export default DialogsItem;