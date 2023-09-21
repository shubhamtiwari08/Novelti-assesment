import React, { useContext } from "react";
import "./user.css";
import { useNavigate } from "react-router";
import { userContext } from "../Context/UserProvider";

function User({ userData }) {
  const Navigate = useNavigate();
  const { deleteUser } = useContext(userContext);

  return (
    <tr >
      <td> {userData?.firstName} </td>
      <td> {userData?.email}</td>
      <td> {userData?.mobileNo}</td>

      <td className="option-cell">
        <button
          className="secondary-btn edit"
          onClick={() => Navigate(`/userform/${userData?.firstName}`)}
        >
          edit
        </button>
        <button
          className="secondary-btn delete"
          onClick={() => deleteUser(userData._id)}
        >
          delete
        </button>
        <button className="primary-btn" onClick={() => Navigate(`/users/${userData?.firstName}`)}>view</button>
      </td>
    </tr>
  );
}

export default User;
