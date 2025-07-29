import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../utills/constants';
import { useDispatch } from 'react-redux';
import {removeUserFromFeed} from "../utills/feedSlice"


const Usercard = ({ user }) => {
  

  const dispatch = useDispatch();

  const handleRequest = async(status,userId)=>{
    try{
     const res = await axios.post(BASE_URL + "/request/send/"  + status + "/" + userId,{},
      {withCredentials: true,
        });
        
        dispatch(removeUserFromFeed(userId))


      }catch(err){
     console.log(err.message)
  }
  }
if (!user) return null; 

  const { _id, firstName, lastName, age, about, gender, photoUrl } = user;
 
 
  
  return (
    <div className="card bg-base-300 w-70 shadow-sm">
      <figure>
        <img src={photoUrl || "/default-user.jpg"}
      alt="photo" className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
       
        {age && gender && <p>{age + ", " + gender}</p>}
         <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={()=> handleRequest("ignored", _id)}>Ignore</button>
          <button className="btn btn-secondary"onClick={()=> handleRequest("interested", _id)}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
