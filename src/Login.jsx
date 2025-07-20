import React, { useState } from "react";
import axios from "axios";



const Login = () => {
        const [emailId, setEmailId] = useState("heenalohar2128@gmail.com");
       const [password, setPassword] = useState("Heena@123");

       const handleLogin = async ()=>{
         try{ 
          const res =  await axios.post("http://localhost:7777/login",{
            emailId,
            password
          });
         }catch(err){
          console.log(err);
         }
    
}

  return (
    <div className="flex justify-center my-12">
    <div className="card card-border bg-base-300 w-96 "> 
  <div className="card-body">
    <h2 className="card-title flex justify-center mb-5 ">Login</h2>

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


    <div className="card-actions justify-center my-7">
      <button className="btn btn-primary " onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
   
  );
};

export default Login; 
