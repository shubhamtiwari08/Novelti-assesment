import React, { useState } from "react";
import "./userform.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNo: "",
  address1: "",
  address2: "",
  state: "",
  city: "",
  country: "",
  zipCode: "",
};

function UserForm() {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values) => { console.log(values)},
  });

  

 
  return (
    <div className="container form-contianer">
      <button className="primary-btn back-btn">back</button>
      <h1>User Form</h1>
      <div className="user-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREl1TQtDYX5h2D_zEWAcR7uZge3w8w-BVjd-4QqFc4ZncS05EcIP7oVgvJWHY7ETxPp8Y&usqp=CAU"
          alt="user"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="wrap-input">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="wrap-input">
          <div>
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="mobileNo">Mobile No</label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={values.mobileNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="wrap-input">
          <div>
            <label htmlFor="address1">Address 1</label>
            <input
              type="text"
              id="address1"
              name="address1"
              value={values.address1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="address2">Address 2</label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={values.address2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="wrap-input">
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="wrap-input">
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={values.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <button type="submit" className="secondary-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
