import React from 'react';
import preloader from "../../assets/images/preloader.gif"
let styles = {
    width:150,
    position:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)'
}
let Preloader = (props)=>{
    return <div style={styles}><img src={preloader} alt=""/></div>
}
export default Preloader;