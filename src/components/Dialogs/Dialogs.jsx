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

    let link = React.createRef();

    let click = () => {
        props.dispatch({type: "ADD-NEW-MESSAGE"});
    }

    let change = () => {
        let value = link.current.value;
        props.dispatch({type: "ADD-NEW-MESSAGE-CHAR", text: value});
    }

    
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <textarea ref={link} value={props.newMessageText} onChange={change}></textarea>
                <div>
                    <button type="submit" className={styles.button} onClick={click}>Отправить</button>
                </div>
            </div>
        </div>
    );

}

export default Dialogs;