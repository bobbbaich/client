import axios from "axios";

const http = axios.create({
  baseURL: "https://development.cloudbohdan.click",
  headers: {
    "Content-type": "application/json"
  }
});

export default http;