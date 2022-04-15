import React from "react";
import classes from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.image}>
                <img src='https://c.wallhere.com/photos/2d/b9/Retro_computers_retro_games_retro_science_fiction_neon_cyberpunk_synthwave_KowalArt-2099949.jpg!d' />
            </div>
            <div>
                Ava
            </div>
        </div>
    );
}

export default ProfileInfo;