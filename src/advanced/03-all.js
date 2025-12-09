// src/advanced/03-all.js
import axios from "axios";

const request1 = axios.get("https://httpbin.org/get?name=yaya");
const request2 = axios.get("https://httpbin.org/get?age=20");

axios
    .all([request1, request2])
    .then(
        axios.spread((res1, res2) => {
            console.log("结果1：", res1.data);
            console.log("结果2：", res2.data);
        })
    )
    .catch((err) => console.error("并发请求错误：", err.message));
