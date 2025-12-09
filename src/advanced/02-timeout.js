// src/advanced/02-timeout.js
import axios from "axios";

axios
    .get("https://httpbin.org/delay/5", {
        timeout: 2000, // 2 秒超时
    })
    .then((res) => console.log("成功：", res.data))
    .catch((err) => console.error("超时错误：", err.message));
