import React from "react";
import MyPosts from "./MyPosts";
import { addPostAction, changePostAction } from "../../../redux/profileReducer";
import Myposts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {	
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
	return {
		onButton: (text)=>{
			dispatch(addPostAction(text));
		}
		
	}
};
const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);



export default MypostsContainer;
