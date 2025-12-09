// src/interceptor/01-request.js
import axios from "axios";

// 创建实例
const instance = axios.create({
    baseURL: "https://httpbin.org",
});

// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        console.log("【请求拦截器】发送请求前：", config.url);

        // 添加一个测试用时间戳
        config.params = {
            ...(config.params || {}),
            timestamp: Date.now(),
        };

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.get("/get").then((res) => {
    console.log("响应结果：", res.data);
});
