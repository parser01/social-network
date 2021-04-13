import NewMessage from "./NewMessage";
import { addMessageActionCreator, typeNewMessageTextActionCreator } from './../../../../redux/messages-reducer';

const NewMessageContainer = (props) => {
   const state = props.store.getState();

   const typeNewMessageText = (newMessageText) => props.store.dispatch(typeNewMessageTextActionCreator(newMessageText));

   const addMessage = () => props.store.dispatch(addMessageActionCreator(props.id));

   return <NewMessage newMessageText={state.messages.newMessageText} typeNewMessageText={typeNewMessageText} 
   addMessage={addMessage} />;
};

export default NewMessageContainer;