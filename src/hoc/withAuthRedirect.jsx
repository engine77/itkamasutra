import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {	
    return {      
      isRegistrated:state.auth.isRegistrated
    };
  };

export let withAuthRedirect = (Component)=>{
  
    class componentRedirect extends React.Component{    
        render(){         
            return !this.props.isRegistrated ? <Redirect to="/login"/>  : <Component {...this.props}/>;
        }    
    }
   
    
    return connect(mapStateToProps)(componentRedirect);
}

