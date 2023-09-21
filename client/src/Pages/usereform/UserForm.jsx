import React, { useContext, useEffect, useState } from "react";
import "./userform.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import { City, Country, State } from "country-state-city";
import { useNavigate, useParams } from "react-router";
import { userContext } from "../../Context/UserProvider";

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

  const {name} = useParams()

  const Navigate = useNavigate();

  const {createUser} = useContext(userContext)

  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");

  

  

  const { values, errors, touched,isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      if(!name){createUser(values)
      if(values){
        Navigate('/')
      }}
     

    },
  });

  console.log(isSubmitting)
  const country = Country.getAllCountries();
  const countryWithCode = country.filter((item) => item.name === countryName)[0]


  const StatesOfCountry = State.getStatesOfCountry(countryWithCode?.isoCode);

  const stateWithCode = StatesOfCountry.filter((item) => item.name === stateName)[0]
  
  const city= City.getCitiesOfState(countryWithCode?.isoCode,stateWithCode?.isoCode)

 


  return (
    <div className="container form-contianer">
      <button className="primary-btn back-btn" onClick={() => Navigate("/")}>
        back
      </button>
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
            <p className={touched.firstName && errors?.firstName ? "form-error" :""} >{touched.firstName && errors?.firstName}</p>
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
            <p className={touched.lastName && errors?.lastName ? "form-error" :""}>{touched.lastName && errors?.lastName}</p>
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
            <p className={touched.email && errors?.email ? "form-error" :""}>{touched?.email && errors?.email}</p>
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
            <p className={touched.mobileNo && errors?.mobileNo ? "form-error" :""}>{touched?.mobileNo && errors?.mobileNo}</p>
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
            <p className={touched.address1 && errors?.address1 ? "form-error" :""}>{touched?.address1 && errors?.address1}</p>
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
            <p className={touched.address2 && errors?.address2 ? "form-error" :""}>{touched.address2 && errors?.address2}</p>
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
            <label htmlFor="country">Country</label>
            <p className={touched.country && errors?.country ? "form-error" :""}>{touched.country && errors?.country}</p>
            <select
              id="country"
              name="country"
              value={values.country}
              onChange={handleChange}
              onClick={(e)=>setCountryName(e.target.value)}
              onBlur={handleBlur}
            >
              <option value="">Select a country</option>
              {country.map((name) => (
                <option value={`${name.name}`}>{name.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="state">State</label>
            <p className={touched.state && errors?.state ? "form-error" :""}>{touched.state && errors?.state}</p>
            <select
            id="state"
            name="state"
            value={values.state}
            onChange={handleChange}
            onClick={(e)=>setStateName(e.target.value)}
            onBlur={handleBlur}
          >
            <option value="">Select state</option>
            {StatesOfCountry.map((name) => (
              <option value={`${name.name}`}>{name.name}</option>
            ))}
          </select>
          </div>
        </div>

        <div className="wrap-input">
          <div>
            <label htmlFor="city">City</label>
            <p className={touched.city && errors?.city ? "form-error" :""}>{touched.city && errors?.city}</p>
            <select
              type="text"
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            ><option value="">Select city</option>
            {city.map((name) => (
              <option value={`${name.name}`}>{name.name}</option>
            ))}
            </select>
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <p className={touched.zipCode && errors?.zipCode ? "form-error" :""} >{errors?.zipCode}</p>
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
          {!name ? "Submit":"update"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
