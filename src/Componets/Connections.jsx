import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utills/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utills/connectionSlice';
import { Link } from 'react-router-dom';

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
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
    return (
      <h1 className="flex justify-center my-10 text-2xl">No Connections Found</h1>
    );
  }

  return (
    <div className="flex flex-col items-center text-xl my-4 gap-6 w-full px-4 overflow-y-auto max-h-[calc(100vh-100px)]">
      <h1 className="text-3xl font-bold mb-4">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } = connection;

        return (
          <div
            key={_id}
            className="w-full max-w-2xl bg-base-300 shadow-md rounded-xl flex items-center p-4"
          >
            <img
              className="h-24 w-24 rounded-full object-cover mr-4"
              src={photoUrl}
              alt="profile"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">
                {firstName} {lastName}
              </h2>
              {age && gender && (
                <p className="text-sm text-gray-500 mb-1">
                  {`${age}, ${gender}`}
                </p>
              )}
              <p className="text-base">{about}</p>
            </div>
            <Link to={`/Chat/${_id}`}>
              <button className="btn btn-primary ml-4">Chat</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
