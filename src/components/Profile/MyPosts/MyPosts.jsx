import React from 'react';
import classq from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let posts = props.postsData.map(post => {
    return <Post message={post.message} likeCount={post.likesCount}/>
  });

  return (
    <div className={classq.wrapper}>
      My posts
      <div className={classq.addPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classq.post}>
        <div className={classq.item}>
          {posts}
        </div>
      </div>
    </div>
  );
}


export default MyPosts;