import React from "react";
import s from "./../Dialogs.module.css";


const Message = (props) => {
  return <div className={s.dialog_message}>{props.message} <span>{props.from}</span></div>;
};


export default Message;
