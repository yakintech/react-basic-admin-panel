//GET-POST-PUT-DELETE

import { axiosInstance } from "./axiosInstance"

export const network = {

    getAll: async (url) => {

        let responseData = [];

        await axiosInstance.get(url)
            .then(res => {
                responseData = res.data;
            })

        return responseData;

    },
    getById: async (url, id) => {

        let response = {};

        await axiosInstance.get(`${url}/${id}`)
            .then(res => {
                response = res.data;
            });

        return response;

    },
    add: async (url, data) => {
        let response = {};

        await axiosInstance.post(url, data)
            .then(res => {
                response = res.data;
            });

        return response;

    },
    delete: async (url, id) => {

        let response = {};

        await axiosInstance.delete(`${url}/${id}`)
            .then(res => {
                response = res.data;
            });

        return response;
    },
    update: async (url, id, data) => {

        let response = {};

        await axiosInstance.put(`${url}/${id}`, data)
            .then(res => {
                response = res.data;
            });

        return response;

    }

}



