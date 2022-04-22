import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { newCharPostText } from './redux/state';
import * as ReactDOMClient from 'react-dom/client';
import { addNewMessage } from './redux/state';
import { addNewMessageChar } from './redux/state';


const root = ReactDOMClient.createRoot(document.getElementById("root"));


export let renderEntireTree = (state) => 
{  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} newCharPostText={newCharPostText} addNewMessage={addNewMessage} addNewMessageChar={addNewMessageChar}/>,
    </React.StrictMode>
  );  
} 


