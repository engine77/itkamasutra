import React, {useState, useEffect} from "react";
import s from "./ProfileInfo.module.css";


const ProfileStatus = (props) =>{
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const editStatus = ()=>{
    setEditMode(true);
  }
  const onChange = (e) => {
    setStatus(e.currentTarget.value)
  };
  const  onBlurOut = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  useEffect(()=>{
      setStatus(props.status);
  },[props.status])

  return (
    <div>status - 
      {!editMode ? (
        <span onDoubleClick={editStatus}>
          {props.status || "___________"}
        </span>
      ) : (
        <input
          type="text"
          autoFocus={true}
          onChange={onChange}
          onBlur={onBlurOut}
          value={status || ""}
        />
      )}
    </div>
  );
}


// class ProfileStatus extends React.Component {
//   state = {
//     editStatus: false,
//     status: this.props.status,
//   };
//   setStatus = () => {
//     this.setState({
//       editStatus: true,
//     });
//   };
//   onBlurOut = () => {
//     this.setState({
//       editStatus: false,
//     });
//     this.props.updateStatus(this.state.status);
//   };
//   onChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value,
//     });
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status,
//       });
//     }
//   }

//   render() {
//     return (
//       <div>
//         {!this.state.editStatus ? (
//           <span onDoubleClick={this.setStatus}>
//             {this.props.status || "___________"}
//           </span>
//         ) : (
//           <input
//             type="text"
//             autoFocus={true}
//             onChange={this.onChange}
//             onBlur={this.onBlurOut}
//             value={this.state.status || ""}
//           />
//         )}
//       </div>
//     );
//   }
// }
export default ProfileStatus;
