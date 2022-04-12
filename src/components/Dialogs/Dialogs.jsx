import React from "react";
import styles from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + " " + styles.active}>
                    Alex
                </div>
                <div className={styles.dialog}>
                    Oleg
                </div>
                <div className={styles.dialog}>
                    Kirill
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>Ok</div>
                <div className={styles.message}>Yo</div>
            </div>
        </div>
    );
    
} 

export default Dialogs;