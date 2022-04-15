import React from "react";
import SingleFriend from "./SingleFriend/SingleFriend";
import styles from "./Friends.module.css"

const Friends = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.friendsHeader}>Friends</div>
            <div className={styles.container}>
                <SingleFriend state={props.state[0].name}/>
                <SingleFriend state={props.state[1].name}/>
            </div>
        </div>
    )
}


export default Friends;
