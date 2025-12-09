// src/basic/04-delete.js
import axios from "axios";

const url = "https://httpbin.org/delete";

axios
    .delete(url, {
        data: {
            id: 1,
        },
    })
    .then((res) => {
        console.log("DELETE 成功：", res.data);
    })
    .catch((err) => {
        console.error("DELETE 失败：", err.message);
    });
