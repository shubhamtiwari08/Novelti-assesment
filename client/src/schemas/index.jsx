import * as yup from 'yup';

export const signUpSchema = yup.object({
    firstname:yup.string().min(5).max(25).required("please enter your first name"),
    lastName:yup.string().min(5).max(25).required("please enter your last name"),
    email: yup.string().email().required("please enter your email"),
    mobileNo: yup.number().min(10).max(10).required("please enter your mobile no"),
    address1: yup.string().required("please enter your address "),
    address2: "",
    state: yup.string().required("enter your state"),
    city: yup.string().required("please enter your city"),
    country: yup.string().min(5).max(25).required("please enter your country"),
    zipCode: yup.number().min(6).required("enter zip code"),
})