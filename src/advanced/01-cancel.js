// src/advanced/01-cancel.js
import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
    .get("https://httpbin.org/delay/3", {
        cancelToken: source.token,
    })
    .then((res) => {
        console.log("请求成功：", res.data);
    })
    .catch((err) => {
        if (axios.isCancel(err)) {
            console.log("请求已取消：", err.message);
        } else {
            console.error("错误：", err);
        }
    });

// 1 秒后取消请求
setTimeout(() => {
    source.cancel("用户主动取消请求");
}, 1000);
