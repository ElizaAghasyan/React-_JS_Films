import axios from "axios";
import queryString from 'query-string';

import { apiConfig } from "./apiConfig";

export const axiosCreate = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        "Content-type": "text/plain"
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});
