import React from 'react';
import classes from './Profile.module.css';


const Profile = () => {
    return (
      <div className={classes.content}>
        <div>
          <img src='https://molbert.com.ua/img/gallery/big/picture_8364_9539.jpg' />
        </div>
        <div>Ava</div>
        <div>
          my posts
          <div>
            New post
          </div>
          <div className={classes.post}>
            <div className={classes.item}>Post1</div>
          </div>
        </div>
      </div>
    );
}

export default Profile;