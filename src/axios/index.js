// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export default client;
