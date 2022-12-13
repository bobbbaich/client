import axios, {AxiosRequestConfig, AxiosRequestHeaders} from "axios";
import {Auth} from "aws-amplify";

const getJwtToken = (): Promise<string> => Auth.currentSession()
    .then(it => it.getAccessToken())
    .then(it => it.getJwtToken());

const getHeaders = async (): Promise<AxiosRequestHeaders> => {
    return {
        "Content-type": "application/json",
        'Authorization': "Bearer " + await getJwtToken()
    };
};

export const http = {
    async authClient() {
        const config: AxiosRequestConfig = {
            headers: await getHeaders(),
        };
        if (process.env.NODE_ENV === 'development') config.baseURL = "http://localhost:8080";
        return axios.create(config)
    }
}