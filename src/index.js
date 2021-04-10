import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const renderAllTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} /* store={store} */ />
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   );
};

renderAllTree(store.state);

store.subscribe(renderAllTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
