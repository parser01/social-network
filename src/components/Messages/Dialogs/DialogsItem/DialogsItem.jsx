import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <div className={classes.dialogsItem}>
            <NavLink to={ path } activeClassName={classes.active}>
                <div>
                    { props.interlocutorName }
                </div>
            </NavLink>
        </div>
    );
};

export default DialogsItem;