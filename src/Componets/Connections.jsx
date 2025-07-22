import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utills/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utills/connectionSlice';

const Connections = () => {
  
  const connections = useSelector((store) => store.connection);

  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/connections', {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  

  if (!connections) return null;

  if (connections.length === 0) {
    return <h1>No Connections Found</h1>;
  }

  return (
    <div className='flex flex-col items-center text-xl my-4 gap-4'>
      <h1>Connections</h1>
      {connections.map((connection) => {
        const {_id,firstName,lastName,photoUrl,age,gender,about} = connection;
        return( 
            <div key={_id}className="card card-side bg-base-300 shadow-sm">
  <figure>
    <img className=' h-25 w-25 rounded-full mx-3'
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
   {age&& gender&& <p>{age + " ," + gender}</p>}
    <p>{about }</p>

      
   
  </div>
</div>

       
         
      )
      })}
      
    </div>
  );
};


export default Connections;
