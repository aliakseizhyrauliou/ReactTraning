import React from 'react';
import classq from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
          My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={classq.post}>
            <Post message="Hi, how are you?"/>
            <Post message ="Goodbo"/>
            <div className={classq.item}>
              Post 2
            </div>
          </div>
        </div>
      );
    }


export default MyPosts;