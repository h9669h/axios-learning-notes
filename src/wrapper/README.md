# Axios Wrapper（二次封装）

本模块完成了一个可复用的 Axios 封装，适用于：

- Vue3 + TS 项目
- 小程序（改一下 adapter）
- Node.js 工具脚本
- 大屏项目

## ✨ 特性

- 自动携带 Token（支持自定义 getToken）
- 统一错误处理 supports `onError`
- 支持自定义 headers / timeout / baseURL
- 使用实例 request 实现复用，方便扩展
- 提供 GET、POST、PUT、DELETE 四种方法

## 🚀 使用

```js
import { createRequest } from "./createRequest.js";

const request = createRequest({
  baseURL: "https://httpbin.org",
  getToken: () => localStorage.getItem("token"),
  onError: (error) => {
    console.error("统一错误：", error.message);
  },
});

request.get("/get").then(console.log);
