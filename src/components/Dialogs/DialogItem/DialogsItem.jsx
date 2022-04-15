import React from "react";
import { NavLink } from "react-router-dom";
import styles from './../Dialogs.module.css';



const DialogItem = (props) => {
    return (
        <div className={styles.dialo + ' ' + styles.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;