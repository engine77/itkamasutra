import React from "react";
import s from "./profile.module.css";
import MypostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../commons/Preloader";


const Profile = (props) => {  
  if (!props.profile) {
    return <Preloader />;
  }  
  return (
    <div>
      <ProfileInfo profile={props.profile}
       updateStatus={props.updateUserStatusThunk} 
       putPhoto={props.getPhotoProfileThunk} 
       owner = {props.owner}
       status={props.status}
       putProfileForm={props.putProfileFormThunk}
       />
       
      <MypostsContainer />
    </div>
  );
};
export default Profile;
