// src/wrapper/request.demo.js
import { createRequest } from "./createRequest.js";

// 模拟获取 token
function getToken() {
    return "demo-token-888888";
}

const request = createRequest({
    baseURL: "https://httpbin.org",
    getToken,
    onError(error) {
        console.error("统一错误处理：", error.message);
    },
});

// ===== GET =====
request.get("/get", { name: "yaya", age: 20 }).then((data) => {
    console.log("GET 返回：", data);
});

// ===== POST =====
request.post("/post", { msg: "Hello Axios" }).then((data) => {
    console.log("POST 返回：", data);
});
