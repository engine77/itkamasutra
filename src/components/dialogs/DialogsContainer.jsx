import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageAction  
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose } from 'redux';

let mapStateToProps = (state) => {	
  return {
	dialogsPage: state.dialogsPage,
	isRegistrated:state.auth.isRegistrated
  };
};
let mapDispatchToProps = (dispatch) => {
	return {
		onButton: (text)=>{
			dispatch(addMessageAction(text));
		}		
	}
};


export default compose(
	withAuthRedirect,
	connect(mapStateToProps,mapDispatchToProps)
	)
	(Dialogs);
