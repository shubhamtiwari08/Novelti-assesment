import React, { useContext } from "react";
import "./singleuser.css";
import { useNavigate, useParams } from "react-router";
import { userContext } from "../../Context/UserProvider";

function SingleUser() {
  const { name } = useParams();
  const Navigate = useNavigate();

  const {allUsers} = useContext(userContext)

  const singleUserData = allUsers.filter(user => String(user?.firstName) === name)[0]

 

  return (
    <div className="container ">
      <button className="primary-btn back-btn" onClick={() => Navigate("/")}>
        back
      </button>
       <h1 style={{marginTop:"0.5rem"}}>{singleUserData?.firstName}'s detail</h1>
      <div className="user-info-box">
        <div className="fullname">
          <p> First Name: {singleUserData?.firstName}</p>
          <p>Last Name :{singleUserData?.lastName}</p>
        </div>
        <div className="contact">
          <p> Email :{singleUserData?.email}</p>
          <p>No. :{singleUserData?.mobileNo}</p>
        </div>
        <div className="address">
          <p>Address :{singleUserData?.address1},{singleUserData?.address2}</p>
        </div>
        <div className="state">
          <p>State :{singleUserData?.state}</p>
          <p>City :{singleUserData?.city}</p>
        </div>
        <div className="country">
          <p>Country :{singleUserData?.country}</p>
          <p>ZipCode :{singleUserData?.zipCode}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
