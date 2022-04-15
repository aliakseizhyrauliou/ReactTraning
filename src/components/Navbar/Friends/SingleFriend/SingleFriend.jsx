import React from "react";
import styles from "./SingleFriend.module.css";

const SingleFriend = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.friendName}>{props.state}</div>
        </div>
    ) 
}

export default SingleFriend;