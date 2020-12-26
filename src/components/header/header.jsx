import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1691218/9aebeb7e-6910-4c3a-96a4-b994c670ecef/s1200?webp=false"
        alt=""
      />

      <div className={s.login}>
        {props.isRegistrated ? (
          <span>{props.login}</span>          
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      {props.isRegistrated  && <button onClick={props.logout}>Logout</button>}

    </header>
  );
};
export default Header;
