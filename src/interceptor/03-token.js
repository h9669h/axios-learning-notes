// src/interceptor/03-token.js
import axios from "axios";

// 模拟从 localStorage 获取 token
function getToken() {
    return "fake-token-123456"; // 你可以自己改
}

const instance = axios.create({
    baseURL: "https://httpbin.org",
});

// 请求拦截器：自动携带 token
instance.interceptors.request.use(
    (config) => {
        const token = getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log("请求头：", config.headers);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.get("/get").then((res) => {
    console.log("响应：", res.data);
});
