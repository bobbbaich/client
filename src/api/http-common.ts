import axios, {AxiosRequestHeaders} from "axios";
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
        return axios.create({
            headers: await getHeaders(),
            baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:8080" : window.location.hostname,
        })
    }
}