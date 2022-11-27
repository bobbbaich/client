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
            // baseURL: "https://cors-anywhere.herokuapp.com/https://development.cloudbohdan.click",
            // baseURL: "http://localhost:8080",
            headers: await getHeaders()
        })
    }
}