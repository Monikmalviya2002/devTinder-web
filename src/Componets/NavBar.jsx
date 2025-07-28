import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utills/constants';
import { removeUser } from '../utills/userSlice';
import Connections from './Connections';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleLogout = async()=>{
    try { await axios.post(BASE_URL + "/logout",{} ,
       {withCredentials: true,
        });
        dispatch(removeUser())
        navigate("/login")
      }
       catch(err){
        console.log(err);
       }
       
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">devTinder</Link>
      </div>

      {user && (
        <div className="flex items-center gap-4 mx-4">
          <div className="form-control">Welcome , {user.firstName}</div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user"
                  src={user.photoUrl || "https://via.placeholder.com/150"} 
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to ="/Profile" className="justify-between">
                  Profile</Link>
               
              </li>
              <li>
              <Link to="/Connections">Connections</Link>
              </li>
               <li>
              <Link to="/Request">Request</Link>
              </li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
