import React from 'react';

const Usercard = ({ user }) => {
  if (!user) return null;
  const { firstName, lastName, age, gender, photoUrl, about } = user;

  return (
    <div className="card bg-base-300 w-70 shadow-sm">
      <figure>
        <img src={photoUrl} alt="photo" className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
       
        {age && gender && <p>{age + ", " + gender}</p>}
         <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
