import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utills/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utills/feedSlice';
import Usercard from './Usercard.jsx';


const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store)=> store.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

   if(!feed) return null;
   if(feed.length <=0) return <h1 className='flex justify-center my-10 text-2xl'> No new user found</h1>
  return (
    <div className='flex justify-center my-5'>
      <Usercard user={feed[0]}/>
    </div>
  );
};

export default Feed;
