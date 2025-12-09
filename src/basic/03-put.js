// src/basic/03-put.js
import axios from "axios";

const url = "https://httpbin.org/put";

axios
    .put(url, {
        id: 1,
        status: "updated",
    })
    .then((res) => {
        console.log("PUT 成功：", res.data);
    })
    .catch((err) => {
        console.error("PUT 失败：", err.message);
    });
