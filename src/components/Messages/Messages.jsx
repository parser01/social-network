import classes from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";

const Messages = (props) => {
    let routes = props.messages.dialogsItemsData.map(i => <Route path={`/messages/${i.id}`} render={() => <Dialog
        dialogsDataItem={props.messages.dialogsData[i.id-1]} interlocutorName={i.interlocutorName}
        newMessageText={props.messages.newMessageText} typeNewMessageText={props.typeNewMessageText} 
        addMessage={props.addMessage} id={i.id} />} />);

    return (
        <div className={classes.messages}>
            <Dialogs dialogsItemsData={props.messages.dialogsItemsData} />
            <div className={classes.dialogContainer}>
                {routes}
            </div>
        </div>
    );
};

export default Messages;