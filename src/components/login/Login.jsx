import React from "react";
import { Field, reduxForm } from "redux-form";
import { login, captchaThunk } from "../../redux/authReducer";
import { maxLength, required } from "../../reduxFormValidation/validation";
import { LoginFormValid } from "../../reduxFormValidation/validationFormStyles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let max = maxLength(10);

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Login</h2>
      
      <div>
        <Field
          type="email"
          component={LoginFormValid} 
          placeholder="email"
          validate={[required]}
          name="email"
        />
      </div>
      <div>
        <Field
          type="password"
          component={LoginFormValid}
          placeholder="password"
          validate={[required]}
          name="password"
        />
      </div>
      <div>
        <label>
          <Field type="checkbox" component="input" name="rememberMe" />
        </label>
        rememberMe
      </div>
      { props.error && <div>{props.error}</div>}
      <button type="submit">Submit</button>
      {props.captcha && <img style={{height : "200px", width: "250px"}} src={props.captcha} />}
      {props.captcha && <Field type="text" component={LoginFormValid} name="captcha" />}
    </form>
  );
};

let LoginFormRedux = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

let mapStateToProps = (state)=>({
  isRegistrated: state.auth.isRegistrated,
  captcha: state.auth.captcha

})

const Login = (props) => {
 
  let submit = (values) => {
    console.log(values)  
    props.login(values);
  };
  if(props.isRegistrated){
    return <Redirect to="/profile"/>
  }
  return <LoginFormRedux onSubmit={submit} captcha={props.captcha} />;
};
export default connect(mapStateToProps, { login , captchaThunk})(Login);
