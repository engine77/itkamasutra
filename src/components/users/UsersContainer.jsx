import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {  
  CURRENT_PAGE,  
  TOGGLE_BUTTON_DISABLED,
  getUsersThunk,
  followThunk,
  unFollowThunk
} from "../../redux/UsersReducer";
import Preloader from "../commons/Preloader";

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.totalShowPage, this.props.currentPage);   
  }
  paginationClick = (p) => {
    this.props.setCurrentPage(p);
    this.props.getUsersThunk(this.props.totalShowPage, p)   
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          totalShowPage={this.props.totalShowPage}
          paginationClick={this.paginationClick}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followThunk={this.props.followThunk}
          unFollowThunk={this.props.unFollowThunk} 
          usersIdButtonDisabledArray={this.props.usersIdButtonDisabledArray}          
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalShowPage: state.usersPage.totalShowPage,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching,
    usersIdButtonDisabledArray: state.usersPage.usersIdButtonDisabledArray,
  };
};

export default connect(mapStateToProps, { 
  setCurrentPage: CURRENT_PAGE, 
  setToggleButtonDisabled: TOGGLE_BUTTON_DISABLED,
  getUsersThunk,
  followThunk,
  unFollowThunk
})(UserContainer);
