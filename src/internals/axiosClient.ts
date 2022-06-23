import createHttpClient, { HttpClientAdapter } from "src/packages/http-client";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

const axiosInstance = createHttpClient({ httpsAgent });

const axiosClient = new HttpClientAdapter(axiosInstance);
export default axiosClient;
