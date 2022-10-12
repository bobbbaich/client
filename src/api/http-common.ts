import axios from "axios";

const http = axios.create({
  // baseURL: "https://cors-anywhere.herokuapp.com/https://development.cloudbohdan.click",
  // baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
});

export default http;