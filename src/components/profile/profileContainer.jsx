import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserThunk , updateUserStatusThunk , getUserStatusThunk, getPhotoProfileThunk, putProfileFormThunk} from "../../redux/profileReducer";
import Profile from "./profile";
import { compose } from "redux";



class ProfileContainer extends React.Component {
  
  sholdComponentUpdate () {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = this.props.userId;
      // if(!userId){
      //     this.props.history.push("/login")
      // }
    }   
    this.props.getUserThunk(userId);
    this.props.getUserStatusThunk(userId);    
  }
  componentDidMount() {
    this.sholdComponentUpdate();
  }
  componentDidUpdate(prevProps){
    if(this.props.match.params.userId != prevProps.match.params.userId){
      this.sholdComponentUpdate();
    }
  }
  render() {
    if(!this.props.isRegistrated && !this.props.match.params.userId){   
      return <Redirect  to="login"/>
    }  else{
      return <Profile {...this.props} owner = {!this.props.match.params.userId} />;
    }
    
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isRegistrated: state.auth.isRegistrated,
  userId: state.auth.userId,
  status: state.profilePage.status,
  
});

export default compose(
  connect(mapStateToProps, { getUserThunk , updateUserStatusThunk, getUserStatusThunk , getPhotoProfileThunk, putProfileFormThunk}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
