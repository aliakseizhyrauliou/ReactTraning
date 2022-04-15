import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(data => {
        return <DialogItem name = {data.name} id = {data.id}/>
    });


    let messageElements = props.state.messagesData.map(data => {
        return <Message message={data.message}/>
    });


    
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    );

}

export default Dialogs;