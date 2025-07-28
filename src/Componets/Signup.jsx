import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";

import {BASE_URL} from "../utills/constants"
import { useNavigate } from "react-router-dom";




const Signup = () => {
         const[firstName ,setFirstName] = useState("");
          const[lastName ,setLastName] = useState("");
        const [emailId, setEmailId] = useState("");
       const [password, setPassword] = useState("");
       const[error ,setError] = useState("");
       const dispatch = useDispatch();
       const navigate = useNavigate();
      
       const handleSignUp = async ()=>{
         try{ 
          const res =  await axios.post(
            BASE_URL +"/signup",{
              firstName,
              lastName,
            emailId,
            password
          }, {withCredentials:true});

          dispatch(addUser(res.data.data));
          navigate("/profile")
         
         }catch(err){
          setError(err?.response?.data || " something went wrong")
         }
    
}

  return (
    <div className="flex flex-col items-center justify-center my-5 bg-base-100 gap-4">
    <div className="card card-border bg-base-300 w-96 "> 
  <div className="card-body">
    <h2 className="card-title flex justify-center mb-5 ">Signup</h2>

<div className="flex justify-center mb-5">
    <label className="input validator flex justify-center">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input className="flex justify-center"
    type="text"
    value={firstName}
    placeholder="firstName"
    onChange={(e)=> setFirstName(e.target.value)}
  />
</label>
</div>



<div className="flex justify-center mb-5">
    <label className="input validator flex justify-center">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input className="flex justify-center"
    type="text"
    value={lastName}
    placeholder="lastName"
    onChange={(e)=> setLastName(e.target.value)}
  />
</label>
</div>
 <div className="flex justify-center mb-5">
<label className="input validator flex justify-center">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input className="flex justify-center"
    type="text"
    value={emailId}
    placeholder="Email Id"
    onChange={(e)=> setEmailId(e.target.value)}
  
   
  />
</label>
</div>
  <div className="flex justify-center">
<label className="input validator flex justify-center">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input className="flex justify-center"
    type="text"
    value={password}
    placeholder="Password"
    onChange={(e)=> setPassword(e.target.value)}
  
   
  />
</label>
</div>
</div>

    <p className="text-red-500 flex justify-center">{error}</p>
    <div className="card-actions justify-center my-5">
      <button className="btn btn-primary " onClick={handleSignUp}>Signup</button>
    </div>
  </div>

        

   </div>
  );
};

export default Signup; 
