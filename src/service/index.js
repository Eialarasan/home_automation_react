import axios from "axios";
import { BASE_URL } from "./EndPoints";
import { store } from '../createStore'
import { toast } from "react-toastify";
const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export const publicHeaders = () => {
    let token = store?.getState()?.LOGIN?.authToken?.access_token
    return {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
    };
};

export const login = async (url, data) => {
    const config = {
        method: 'POST',
        url,
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await axiosInstance(config);
    return response.data;
};

export const doGet = async (url, params) => {
    const config = {
        params,
        headers: publicHeaders(),
    };
    try {
        const response = await axiosInstance.get(url, config).then(function (response) {
            return response
        }).catch((error) => {
            if (error.response.status === 403) {
                toast.error("session ended Please logout and login")
            } else if (error.response.status === 401){
                toast.error("Request Un Authorized")
            }
            throw error
        });
        return response.data;
    }
    catch (error) {
        return error;
    }
};

export const doPost = async (url, params) => {
    const config = {
        headers: publicHeaders(),
    };
    try {
        const response = await axiosInstance.post(url, params, config).then(function (response) {
            return response
        }).catch((error) => {
            if (error.response.status === 403) {
                toast.error("session ended Please logout and login")
            } else if (error.response.status === 401) {
                toast.error("Request Un Authorized")
            }
            throw error
        });;
        return response.data;
    }
    catch (error) {
        return error;
    }
};







