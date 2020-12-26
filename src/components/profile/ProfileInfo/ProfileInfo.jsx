import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userImg from "../../../assets/images/user.jpg";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import {ProfileFormValid} from "../../../reduxFormValidation/validationFormStyles"
import ProfileFormRedux from "./ProfileInfoForm"

const ProfileInfo = (props) => {
  const [state, setstate] = useState(false);

  const putPhotoProfile = (e) => {
    if (e.target.files.length) {
      props.putPhoto(e.target.files[0]);
    }
  };
  const submit = (formData)=>{
    props.putProfileForm(formData);
    console.log(formData)
    setstate(false);
  }

  return (
    <div>
      <div className={s.avatar}>
        <div>
          <img
            className={s.image}
            src={props.profile.photos.large || userImg}
            alt=""
          />
        </div>
        <span>{props.profile.fullName}</span>
        <br />
        <div>
          {props.owner && <input type="file" onChange={putPhotoProfile} />}
        </div>
        <br/>
        <br/>
       
       

        {!state ? 
          <ProfileUserInfo owner={props.owner} profile={props.profile} changeState={()=>{setstate(true)}} /> 
          : 
          <ProfileFormRedux initialValues= {props.profile} profile={props.profile}  onSubmit={submit}/>
         
        }
        

        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

let ProfileUserInfo = (props) => {
  
  return (
    <div>
      {props.owner && <button onClick={props.changeState}>Edit</button>}
      <div>About Me - {props.profile.aboutMe}</div>
      <div>FullName - {props.profile.fullName}</div>
      <div>lookingForAJob - {props.profile.lookingForAJob ? "yes" : "no"}</div>
      <div>
        lookingForAJobDescription - {props.profile.lookingForAJobDescription}
      </div>
      <h2>Contacts</h2>
      {Object.keys(props.profile.contacts).map((e) => {
        return (
          <div key={e}>
            <b>{e}</b> - {props.profile.contacts[e]}
          </div>
        );
      })}
    </div>
  );
};


// let profileForm = (props) => {
 
//   return (
    
//     <form onSubmit={props.handleSubmit} > 
//       <button type="submit" onClick={props.changeState}>Save</button>
//       <div>
//           <div>FullName - <Field type="text" component={ProfileFormValid} placeholder="text" name="fullName"/></div>
//       </div>
//       <div>
//         <div>lookingForAJob - <Field type="checkbox" component={ProfileFormValid} name="lookingForAJob" /></div>
//       </div>
//       <div>
//         <div>lookingForAJobDescription - <Field type="text" component={ProfileFormValid} name="lookingForAJobDescription" /></div>
//       </div>
//       <h2>Contacts</h2>
//       {Object.keys(props.profile.contacts).map((e) => {
//         return (
//           <div key={e}>
//             <b>{e}</b> - <Field type="text" component={ProfileFormValid} name={e} />
//           </div>
//         );
//       })}
//     </form>
//   );
// };

// let ProfileFormRedux = reduxForm({
//   form: "profileForm",
// })(profileForm);

// ProfileFormRedux = connect(
//   state => ({    
//     initialValues: state.profilePage.profile
//   }),  
// )(ProfileFormRedux);


export default ProfileInfo;
