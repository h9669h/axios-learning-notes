// src/wrapper/createRequest.js
import axios from "axios";

export function createRequest(options = {}) {
    const service = axios.create({
        baseURL: options.baseURL || "https://httpbin.org",
        timeout: options.timeout || 5000,
        headers: options.headers || {},
    });

    // 请求拦截器
    service.interceptors.request.use(
        (config) => {
            // 自动带 token
            const token = options.getToken?.();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            // loading 可扩展：options.onStart && options.onStart()
            return config;
        },
        (error) => Promise.reject(error)
    );

    // 响应拦截器
    service.interceptors.response.use(
        (response) => {
            // httpbin 返回格式为 { data: {...} }
            return response.data;
        },
        (error) => {
            // 统一错误提示
            options.onError?.(error);

            return Promise.reject(error);
        }
    );

    // request(url, method, data)
    function request(config) {
        return service(config);
    }

    return {
        request,
        get(url, params = {}, config = {}) {
            return request({
                url,
                method: "GET",
                params,
                ...config,
            });
        },
        post(url, data = {}, config = {}) {
            return request({
                url,
                method: "POST",
                data,
                ...config,
            });
        },
        put(url, data = {}, config = {}) {
            return request({
                url,
                method: "PUT",
                data,
                ...config,
            });
        },
        delete(url, data = {}, config = {}) {
            return request({
                url,
                method: "DELETE",
                data,
                ...config,
            });
        },
    };
}
