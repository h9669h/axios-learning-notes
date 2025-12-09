// src/advanced/04-retry.js
import axios from "axios";

const instance = axios.create({
    baseURL: "https://httpbin.org",
});

// 添加 retry 属性
instance.defaults.retry = 3; // 重试 3 次
instance.defaults.retryDelay = 1000; // 每次间隔 1 秒

instance.interceptors.response.use(
    (res) => res,
    async (err) => {
        const config = err.config;

        if (!config || !config.retry) return Promise.reject(err);

        config.__retryCount = config.__retryCount || 0;

        if (config.__retryCount >= config.retry) {
            console.log("重试次数用完");
            return Promise.reject(err);
        }

        config.__retryCount += 1;

        console.log(`请求失败，正在重试（${config.__retryCount} / ${config.retry}）...`);

        await new Promise((resolve) => setTimeout(resolve, config.retryDelay));

        return instance(config);
    }
);

instance
    .get("/status/500") // 故意请求一个会失败的接口
    .catch((err) => console.error("最终失败：", err.message));
