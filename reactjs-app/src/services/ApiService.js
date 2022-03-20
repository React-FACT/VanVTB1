import axios from 'axios';
import http from "../http-common";

const instance = axios.create({
    baseURL: http.WS_BASE_URL,
});
const apiURL = '/api/v1';

instance.interceptors.request.use(async (http) => {
    http.headers.ContentType = 'application/json';
    return http;
});

export const fetchAllUser = async () => (
    await instance.get(`${apiURL}/user`)
);

export const fetchUserbyID = async (id) => (
    await instance.get(`${apiURL}/user/${id}`)
);

export const addNewUser = async (newUser) => (
    await instance.post(`${apiURL}/user`, newUser)
);

export const updateUserByID = async (id, updatedata) => (
    await instance.post(`${apiURL}/user/${id}`, updatedata)
);

export const deleteUserbyID = async (id) => (
    await instance.delete(`${apiURL}/user/${id}`)
);
