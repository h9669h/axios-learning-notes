// src/advanced/05-instance.js
import axios from "axios";

// 创建自定义实例
const api = axios.create({
    baseURL: "https://httpbin.org",
    timeout: 5000,
    headers: {
        "X-Project": "axios-learning-notes",
    },
});

// 添加拦截器
api.interceptors.request.use((config) => {
    console.log("实例请求拦截器：", config.url);
    return config;
});

api.interceptors.response.use((res) => res.data);

api.get("/get").then((data) => {
    console.log("自定义实例返回的数据：", data);
});
