import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;