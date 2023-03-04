import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_HOST;
const userInfo = JSON.parse(localStorage["userInfo"] || "{}");

const axiosRequest = (method, url, data, params) => {
   return axios({
      method,
      url: `${baseUrl}${url}`,
      data,
      params,
   });
};

export const productAdmin = (data) => {
   return axiosRequest("GET", `${baseUrl}/product`, data);
};

export const login = (data) => {
   return axiosRequest("POST", "/auth/login", data);
};

export const dologin = (data) => {
   const sendData = {
      emailOrusername: data.email,
      password: data.password,
   };
   return axiosRequest("POST", "/auth/login", sendData);
};

export const logout = (token) => {
   return axios({
      method: "DELETE",
      url: `${baseUrl}/auth/logout`,
      headers: { "x-access-token": token },
   });
};

export const register = (body) => {
   return axiosRequest("POST", "/auth/register", body);
};

export const reset = (data) => {
   return axiosRequest("POST", "/profile/change-password", data);
};

export const getProfile = (token) => {
   //  return axiosRequest("GET", ``, data);
   return axios({
      method: "GET",
      url: `${baseUrl}/profile/:${userInfo.id}`,
      headers: { "x-access-token": token },
   });
};

export const patchProfile = (data, token) => {
   return axios({
      method: "PATCH",
      url: `${baseUrl}/profile/edit`,
      headers: {
         "x-access-token": token,
         "Content-Type": "multipart/form-data",
      },
      data,
   });
};

export const getProduct = (params, data) => {
   return axiosRequest("GET", "/product", data, params);
};

export const getCategories = (data) => {
   return axiosRequest("GET", "/categories", data);
 };