import React , {useState} from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userImg from "../../assets/images/user.jpg";


const Users = (props) => {
  let x = Math.ceil(props.totalCount / props.totalShowPage);
  let paginationButtons = [];
  for (let i = 1; i <= x; i++) {
    paginationButtons.push(i);
  }
  const [state, setstate] = useState(props.totalShowPage);
  let prev = () => {
    setstate(state-props.totalShowPage);
  }
  let next = () => {
    setstate(state+props.totalShowPage);
  } 
  return (
    <div className={s.users}>
      {
        <div>
          {state <= props.totalShowPage ?  " " : <button onClick={prev}>prev</button>}
          {paginationButtons.filter(e=> e <= state && e > state-props.totalShowPage ).map((pages) => {
            
              return (
                <span
                  key={pages}
                  onClick={(e) => {
                    props.paginationClick(pages);
                  }}
                  className={
                    props.currentPage === pages
                      ? s.activePagination
                      : s.paginatonLink
                  }
                >
                  {pages}
                </span>
              );
              
          })}         
          {state >= x ?  " " : <button onClick={next}>next</button>} 
        </div>
      }

      {props.users.map((u) => (
        <div key={u.id} className={s.userBox}>
          <div className={s.imgBox}>
            <div className={s.img}>
              <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small || userImg} alt="" />
              </NavLink>
            </div>

            {!u.followed ? (
              <button
                disabled={props.usersIdButtonDisabledArray.some(
                  (e) => e === u.id
                )}
                onClick={() => {
                  props.followThunk(u.id);
                }}
              >
                Follow
              </button>
            ) : (
              <button
                disabled={props.usersIdButtonDisabledArray.some(
                  (e) => e === u.id
                )}
                onClick={() => {
                  props.unFollowThunk(u.id)
                }}
              >
                Unfollow
              </button>
            )}
          </div>
          <div className={s.txtBox}>
            <div className={s.leftBox}>
              <h4>{u.name}</h4>
              <span>{u.status}</span>
            </div>
            <div className={s.rightBox}>
              {/* <span>{u.location.city}</span> */}
              <br />
              {/* <span>{u.location.country}</span> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
