import React from 'react';
import classq from './Post.module.css';


const Post = () => {
    return (
        <div className={classq.item}>
            <img src='https://www.buro247.ua/images/2017/09/neytiri-avatar-5824.jpg'/>
            Post1
            <div>
                <span>Like</span>
            </div>
        </div>
      );
    }


export default Post;