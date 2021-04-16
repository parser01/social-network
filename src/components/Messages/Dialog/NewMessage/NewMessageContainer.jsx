import NewMessage from "./NewMessage";
import { addMessageActionCreator, typeNewMessageTextActionCreator } from './../../../../redux/messages-reducer';
import StoreContext from "../../../../StoreContext";

const NewMessageContainer = (props) => {
   return <StoreContext.Consumer>
      {
         store => {
            const state = store.getState();
            const typeNewMessageText = (newMessageText) => store.dispatch(typeNewMessageTextActionCreator(newMessageText));
            const addMessage = () => store.dispatch(addMessageActionCreator(props.id));

            return <NewMessage newMessageText={state.messages.newMessageText} typeNewMessageText={typeNewMessageText}
               addMessage={addMessage} />
         }
      }
   </StoreContext.Consumer>
   /*    const state = props.store.getState();
   
      const typeNewMessageText = (newMessageText) => props.store.dispatch(typeNewMessageTextActionCreator(newMessageText));
   
      const addMessage = () => props.store.dispatch(addMessageActionCreator(props.id));
   
      return <NewMessage newMessageText={state.messages.newMessageText} typeNewMessageText={typeNewMessageText} 
      addMessage={addMessage} />; */
};

export default NewMessageContainer;