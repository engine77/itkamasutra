import React,{memo} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const Myposts = React.memo( (props) => {
  let postsEl = props.profilePage.postData.map((el) => (
    <Post message={el.message} likes={el.likesCount} key={el.id} />
  ));

  let onButton = (values) => {    
    props.onButton(values.postArea);
  };

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <MyPostFormRedux onSubmit={onButton}/>
      <div className={s.posts}>{postsEl}</div>
    </div>
  );
})

let MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="postArea" />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );

  
};
let MyPostFormRedux = reduxForm({
  // a unique name for the form
  form: "MyPostForm",
})(MyPostForm);

export default Myposts;
