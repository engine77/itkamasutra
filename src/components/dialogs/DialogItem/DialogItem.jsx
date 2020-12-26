import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.name}>
      <img src="https://yt3.ggpht.com/a/AATXAJzsQ_nWMY5Ztfc2Z8UBB4q-i4ZkP1JAfU6iNzpZ=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
