import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utills/requestSlice';
import {BASE_URL} from "../utills/constants"

function Request() {
      const dispatch = useDispatch();
   const requests = useSelector((store) => store.requests);


      const fetchRequests = async()=>{
      try{ const res = await axios.get( BASE_URL + "/user/requests/received",
         {withCredentials: true,
          });
          
       dispatch(addRequest(res.data.data));
  console.log("Fetched requests:", res.data);

      }
      catch(err){
        console.log(err.message)
      }
    }
  console.log(fetchRequests)
    useEffect(()=>{
    fetchRequests()
    },[])

  if(!requests) return null;

  if (requests.length === 0) {
    return <h1>No Requests Found</h1>;
  }

  return (
    <div className='flex flex-col items-center text-xl my-4 gap-4'>
      <h1>Connections Request</h1>
      {requests.map((request) => {
        const {_id,firstName,lastName,photoUrl,age,gender,about} = request.fromUserId
        
        return( 
            <div key={_id}className="card card-side bg-base-300 shadow-sm">
  <figure>
    <img className=' h-25 w-25 rounded-full mx-3 '
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mx-2">{firstName + " " + lastName}</h2>
   {age&& gender&& <p>{age + " ," + gender}</p>}
    <p>{about }</p>   
    <div>
    <button className="btn btn-active btn-primary mx-2 ">Reject</button>
<button className="btn btn-active btn-secondary mx-2 ">Accept</button>
    </div>
  </div>
</div>         
      )
      })}
      
    </div>
  );
  
}

export default Request
