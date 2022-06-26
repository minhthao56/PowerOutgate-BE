import "dotenv/config";
import createHttpClient, { HttpClientAdapter } from "@src/packages/http-client";
import httpsAgent from "./httpsAgent";

const axiosInstance = createHttpClient({ httpsAgent, baseURL: process.env.BASE_URL_CRAWLER_HCM });

const axiosClientHCM = new HttpClientAdapter(axiosInstance);
export default axiosClientHCM;
