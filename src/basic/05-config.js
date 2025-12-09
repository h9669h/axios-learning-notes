// src/basic/05-config.js
import axios from "axios";

// 设置全局默认值
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;
axios.defaults.headers.common["X-Custom-Header"] = "axios-learning";

axios
    .get("/get")
    .then((res) => {
        console.log("全局配置示例：", res.data);
    })
    .catch((err) => {
        console.error("请求失败：", err.message);
    });
