import createHttpClient, { HttpClientAdapter } from "src/packages/http-client";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

const axiosInstance = createHttpClient({ httpsAgent, baseURL: process.env.BASE_URL_CRAWLER });

const axiosClient = new HttpClientAdapter(axiosInstance);
export default axiosClient;
