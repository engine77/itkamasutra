import React from "react";
import s from "./validationFormStyles.module.css"

const FormValidationStyles = ({input, meta, ...props})=>{
    
    let el = React.createElement(props.element, {...input, ...props});
    let error = meta.touched &&  meta.error;
    
    return (
        <span className={ s.formControl + " " + (error ? s.error : "" ) }>
          {el}
          { error && <span> { meta.error } </span> }
        </span>
      );
}

export const DialogFormValid = (props)=>{
    return <FormValidationStyles {...props} element = "textarea" ></FormValidationStyles>
}
export const LoginFormValid = (props)=>{
    return <FormValidationStyles {...props} element = "input" ></FormValidationStyles>
}
export const ProfileFormValid = (props)=>{
    return <FormValidationStyles {...props} element = "input" ></FormValidationStyles>
}