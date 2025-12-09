// src/basic/01-get.js
import axios from "axios";

// 示例接口（使用 HTTPBin）
const url = "https://httpbin.org/get";

axios
    .get(url, {
        params: {
            name: "yaya",
            age: 20,
        },
    })
    .then((res) => {
        console.log("GET 请求成功：", res.data);
    })
    .catch((err) => {
        console.error("GET 请求失败：", err.message);
    });
