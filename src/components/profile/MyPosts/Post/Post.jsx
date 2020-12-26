import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://im0-tub-ru.yandex.net/i?id=d381138b1921768737d2a2fda047ce31&n=13"
        alt=""
      />
      {props.message}
      <div>
        <span>Like {props.likes}</span>
      </div>
    </div>
  );
};
export default Post;
