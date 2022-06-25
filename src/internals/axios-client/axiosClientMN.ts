import createHttpClient, { HttpClientAdapter } from "@src/packages/http-client";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

const axiosInstance = createHttpClient({ httpsAgent, baseURL: process.env.BASE_URL_CRAWLER_MN });

const axiosClientMN = new HttpClientAdapter(axiosInstance);
export default axiosClientMN;
