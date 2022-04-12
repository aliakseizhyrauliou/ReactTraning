import React from 'react';
import classq from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classq.item}>
            <div className={classq.userPhoto}>
                <img src='https://www.buro247.ua/images/2017/09/neytiri-avatar-5824.jpg'/>
            </div>
            <div className={classq.message}>
                {props.message}
            </div>
            <div className={classq.likes}>
                <span>Like</span>
            </div>
        </div>
      );
    }


export default Post;