# Axios Learning Notes 🚀

本项目用于系统学习 Axios，包括：
- 基础使用（GET/POST/PUT/DELETE）
- Axios 全局配置
- 请求/响应拦截器
- Token 自动携带
- 并发请求
- 取消请求
- 超时设置
- 自定义 Axios 实例
- Axios 二次封装

所有示例可直接运行并查看效果。

---

## 📂 目录结构


---

# 🧱 功能模块介绍

## 1️⃣ basic — 基础示例（5 个）
- GET 请求  
- POST 请求  
- PUT 请求  
- DELETE 请求  
- Axios 全局配置（baseURL、timeout、headers）

每个文件都可直接运行学习。

---

## 2️⃣ interceptor — 拦截器（3 个）
- 请求拦截器（自动添加参数、添加 token）  
- 响应拦截器（统一 data 处理）  
- 自动携带 Token 示例（JWT 格式）

> 实际项目中，这部分是所有请求库的核心。

---

## 3️⃣ advanced — 高级功能（5 个）
你在真实项目中一定会用到的能力：

- **取消请求（CancelToken）**
- **超时设置 timeout**
- **axios.all 并发请求**
- **请求自动重试 retry**
- **自定义 axios 实例**

高级模块让你对 Axios 的机制理解更深一步。

---

## 4️⃣ wrapper — Axios 二次封装（核心）
这里是项目最实战的一部分，包含：

- createRequest.js：Axios 封装核心  
- 支持自动携带 Token  
- 支持 onError 统一错误处理  
- 支持自定义 baseURL、timeout、headers  
- 提供 get/post/put/delete 简洁调用  
- request.demo.js：演示如何使用  

这部分代码可直接复制到你的：

- Vue3 + TS 项目  
- React 项目  
- 小程序项目（改 axios 适配）  
- Node 工具脚本  

---

# ▶️ 运行示例

安装依赖：

```bash
npm install axios
# 运行任意示例
node src/basic/01-get.js
# 或运行wrapper示例
node src/wrapper/request.demo.js
