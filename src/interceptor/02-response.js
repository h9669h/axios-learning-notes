// src/interceptor/02-response.js
import axios from "axios";

const instance = axios.create({
    baseURL: "https://httpbin.org",
});

// 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        console.log("【响应拦截器】响应数据：", response.data);

        // 模拟统一处理：只返回 data
        return response.data;
    },
    (error) => {
        console.error("【响应错误】", error.message);
        return Promise.reject(error);
    }
);

instance.get("/get").then((data) => {
    console.log("统一处理后的数据：", data);
});
