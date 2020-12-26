import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/Login";
import Music from "./components/music/Music";
import Navbar from "./components/navbar/navbar";
import News from "./components/news/News";
import ProfileContainer from "./components/profile/profileContainer";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import {appInitializedThunk} from "../src/redux/appReducer";
import Preloader from "./components/commons/Preloader";


class App extends React.Component {
  componentDidMount() {
   
    this.props.appInitializedThunk();
  }
 
  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
  return (

    <div className="app-wrapper">
     <HeaderContainer/>
     <Navbar/> 
     
      <div className="app-wrapper-content">        
        <Route path="/dialogs" render={()=><DialogsContainer />} />
        <Route path="/profile/:userId?" render={()=><ProfileContainer /> }/>
        <Route path="/users" render={()=><UsersContainer /> }/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/login" component={Login}/>
        <Route path="/settings" component={Settings}/>
      </div>
      
    </div>
  );
}
};
const mapStateToProps = (state) =>({
  initialized : state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {appInitializedThunk})
  )(App);
