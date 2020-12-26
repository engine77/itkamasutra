import {authAPI} from "../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isRegistrated: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case "AUTH-USER-DATA":
            return {
                ...state,
                ...action.data  
            }
        case "CAPTCHA_FORM":
          return {
              ...state,
              captcha: action.captcha
          }           
            default:
                return state;
    }

}
export let authUserData = (userId, email , login, isRegistrated) => ({
    type: "AUTH-USER-DATA",
    data:{userId, email , login, isRegistrated}
})

export let captchaForm = (captcha) => ({
  type: "CAPTCHA_FORM",
  captcha
})

export const captchaThunk = () => (dispatch)=>{
  return authAPI.get_captcha().then((response) => {      
      dispatch(captchaForm(response.data.url))    
  }); 
}

export const authUserThunk = () => (dispatch)=>{

   return authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {           
          let { id, email, login } = response.data.data;
          dispatch(authUserData(id, email, login, true)); 
        }
      });
}

export const login = (obj) => (dispatch)=>{   
    authAPI.login(obj).then((response) => {
        
        if (response.data.resultCode === 0) {                        
          dispatch(authUserThunk()); 
        }else{ 
          if (response.data.resultCode === 10) {   
            dispatch(captchaThunk())
          }  
          dispatch(stopSubmit("login", {_error:response.data.messages[0]}))
        }
      });
}
export const logout = () => (dispatch)=>{
    
    authAPI.logout().then((response) => {
        
        if (response.data.resultCode === 0) {  
                      
          dispatch(authUserData(null, null, null, false)); 
        }
      });
}


export default authReducer;