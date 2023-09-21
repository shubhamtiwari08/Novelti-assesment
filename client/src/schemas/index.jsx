import * as yup from 'yup';


export const signUpSchema = yup.object().shape({
    firstName: yup.string().min(5, "First name should be at least 5 characters").max(25, "First name should not exceed 25 characters").required("Please enter your first name"),
    lastName: yup.string().min(5, "Last name should be at least 5 characters").max(25, "Last name should not exceed 25 characters").required("Please enter your last name"),
    email: yup.string().email("Invalid email format").required("Please enter your email"),
    mobileNo: yup.string().min(10, "Mobile number should be at least 10 digits").max(10, "Mobile number should not exceed 10 digits").required("Please enter your mobile number"),
    address1: yup.string().required("Please enter your address"),
    address2: yup.string().required("Please enter address2"),
    state: yup.string().required("Please enter your state"),
    city: yup.string().required("Please enter your city"),
    country: yup.string().min(5, "Country name should be at least 5 characters").max(25, "Country name should not exceed 25 characters").required("Please enter your country"),
    zipCode: yup.string().min(6, "Zip code should be at least 6 characters").required("Please enter zip code"),
});

export default signUpSchema;