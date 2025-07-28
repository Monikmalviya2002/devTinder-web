import React, {  useState } from 'react';
import Usercard from './Usercard';
import axios from 'axios';
import { BASE_URL } from '../utills/constants';
import { addUser } from '../utills/userSlice';
import { useDispatch } from 'react-redux';


const EditProfile = ({user}) => {
  
    
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age||"");
  const [gender, setGender] = useState(user.gender ||"");
  const [error, setError] = useState("");
  const [about, setAbout] = useState(user.about|| "");
const [photoUrl, setPhotoUrl] = useState(user.photoUrl ||"");
 const dispatch = useDispatch();


  const handleSave = async () => {
  try {
    
    const res = await axios.post(
      BASE_URL + "/profile/edit",
      {
        firstName,
        lastName,
        age,
        gender,
        photoUrl,
        about,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
     dispatch(addUser(res?.data?.data));
         }catch(err){
            setError(err.message)
         }


  };
  return (
    <div className='flex justify-center my-10'>
    <div className="flex flex-col items-center justify-center mx-6 mb-1bg-base-100 gap-3">
    <div className="card card-border bg-base-300 w-80  "> 
  <div className="card-body ">
    <h2 className="card-title flex justify-center mb-1 ">Edit Profile</h2>
          <input
            className="input input-bordered w-full mb-3"
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            className="input input-bordered w-full mb-3"
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

           <input
            className="input input-bordered w-full mb-3"
            type="text"
            value={photoUrl}
            placeholder="Photo Url"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />

          <input
            className="input input-bordered w-full mb-3"
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            className="input input-bordered w-full mb-3"
            type="text"
            value={gender}
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          />

           <input
            className="input input-bordered w-full mb-3"
            type="text"
            value={about}
            placeholder="About"
            onChange={(e) => setAbout(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          <div className="card-actions justify-center mt-1">
            <button className="btn btn-primary" onClick={handleSave}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <Usercard user={{firstName,lastName,age,gender,photoUrl,about}}/>
    </div>
  );
};

export default EditProfile;
