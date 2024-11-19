import axios from "axios";

axios.interceptors.request.use(
  (req) => {
    const user = localStorage.getItem("user");
    const refreshToken = localStorage.getItem("refreshToken");

    if (user) {
      const { token } = JSON.parse(user);
      req.headers["access_token"] = token;
      req.headers["refresh_token"] = refreshToken;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // 如果是401错误且没有重试过
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 使用refreshToken获取新的accessToken
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("/api/refresh", { refreshToken });

        const { token } = response.data;
        const user = JSON.parse(localStorage.getItem("user"));

        // 更新localStorage中的token
        localStorage.setItem("user", JSON.stringify({ ...user, token }));

        // 更新header中的token
        originalRequest.headers["access_token"] = token;

        // 重试原请求
        return axios(originalRequest);
      } catch (err) {
        // refreshToken也过期,清除用户信息并跳转到登录页
        localStorage.removeItem("user");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);
