import React, { useEffect, useState } from 'react';
import "./userliste.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import Rating from '../Rating';
function UserListe() {
  const [users , setUsers] = useState([]);
 
  const cordon =  () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  }
  cordon()
  // useEffect(  () => {
  //   const getUser = async () => {
  //     try {
      
  //       const res = await axios.get("/api/v1/users");
  //       setUsers(res.data.users);
  //       console.log(res.data.users)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getUser();
  // }, [])
  return (
    <div  className='container'>
      {users.map(user=> 

        <Link to={`/User/${user._id}`} key={user._id}>
          <div className="item" >
            <div className="img">
              <img src="https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461335?b=1&k=20&m=1289461335&s=170667a&w=0&h=7L30Sh0R-0JXjgqFnxupL9msH5idzcz0xZUAMB9hY_k=" alt=" team" />
            </div>
            <div className="info">
              <h3>{user.name}</h3>
              <Rating rating={user.rating} numReviews={user.numReviews} />
            </div>
          </div>
        </Link>
        
        )}
     
    </div>
  )
}

export default UserListe