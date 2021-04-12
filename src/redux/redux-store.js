import { combineReducers, createStore } from "redux";
import myProfileReducer from './myProfile-reducer';
import messagesReducer from './messages-reducer';

let reducers = combineReducers({
   myProfile: myProfileReducer,
   messages: messagesReducer
});


const store = createStore(reducers);

export default store;