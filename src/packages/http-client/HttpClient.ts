import axios, { AxiosInstance, AxiosResponse } from "axios";
import queryString from "query-string";

import { GetQueryClientParams, RequestConfigs } from "./types";

export class HttpClientAdapter {
    private readonly axiosClient: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient;
    }

    get<T>(url: string, configs: Omit<RequestConfigs, "body">): Promise<AxiosResponse<T>> {
        return this.axiosClient.get<T>(url, configs);
    }

    post<T, K>(url: string, body: K, configs: RequestConfigs): Promise<AxiosResponse<T>> {
        return this.axiosClient.post<T>(url, body, configs);
    }

    put<T, K>(url: string, body: K, configs: RequestConfigs): Promise<AxiosResponse<T>> {
        return this.axiosClient.put<T>(url, body, configs);
    }

    delete<T>(url: string, configs: RequestConfigs): Promise<AxiosResponse<T>> {
        return this.axiosClient.delete<T>(url, configs);
    }
}

const defaultConfigs: GetQueryClientParams = {
    paramsSerializer: (params) => queryString.stringify(params),
};

function createHttpClient(configs: GetQueryClientParams) {
    const ins = axios.create({ ...defaultConfigs, ...configs });

    return ins;
}

export default createHttpClient;
