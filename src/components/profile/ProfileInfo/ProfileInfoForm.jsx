import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../reduxFormValidation/validation";
import {ProfileFormValid} from "../../../reduxFormValidation/validationFormStyles";



let profileForm = (props) => {
  return (
   
    <form onSubmit={props.handleSubmit} > 
      <button type="submit" >Save</button>
      
      <div>
          <div>About Me - <Field type="text" component={ProfileFormValid} placeholder="text" name="aboutMe" validate={[required]}/></div>
      </div>
      <div>
          <div>FullName - <Field type="text" component={ProfileFormValid} placeholder="text" name="fullName" validate={[required]}/></div>
      </div>
      <div>
        <div>lookingForAJob - <Field type="checkbox" component={ProfileFormValid} name="lookingForAJob" /></div>
      </div>
      <div>
        <div>lookingForAJobDescription - <Field type="text" component={ProfileFormValid} name="lookingForAJobDescription" /></div>
      </div>
      <h2>Contacts</h2>
      
      {Object.keys(props.profile.contacts).map((e) => {
        return (
          <div key={e}>
            <b>{e}</b> - <Field type="text" component={ProfileFormValid} name={"contacts."+ e} />
          </div>
        );
      })}
       
    </form>
  );
};

let ProfileInfoForm = reduxForm({
  form: "profileForm",
})(profileForm);

export default ProfileInfoForm;

