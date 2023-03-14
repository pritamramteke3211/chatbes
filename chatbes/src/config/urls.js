export const API_BASE_URL =  "http://192.168.1.64:3000/"

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const SIGNUP_API  = getApiUrl('User/signUp');
export const GET_USERS = getApiUrl('User/users');
export const VERIFY_OTP = getApiUrl('User/otpVerify');