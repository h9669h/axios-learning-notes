// src/basic/02-post.js
import axios from "axios";

const url = "https://httpbin.org/post";

axios
    .post(url, {
        username: "yaya",
        password: "123456",
    })
    .then((res) => {
        console.log("POST 成功：", res.data);
    })
    .catch((err) => {
        console.error("POST 失败：", err.message);
    });
