import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} addPost={props.addPost} newPostText={props.newPostText} newCharPostText={props.newCharPostText}/>
    </div>
  );
}

export default Profile;