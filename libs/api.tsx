

import axios from "axios"
import env from "../env.json";

const apiUrl = (url) => {
    return `${env.apiUrl}/${url}`;
}

const get = (url) => {
    return axios.get( apiUrl(url), {})
}

const post = (url,data) => {
    return axios.post( apiUrl(url),  data);
}

const put = (url,data) => {
    return axios.put( apiUrl(url) ,data);
}

export default {
    get,
    post,
    put
}