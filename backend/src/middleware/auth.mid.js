import jwt from "jsonwebtoken";
import { UNAUTHORIZED, ALL_TOKEN_EXPIRED } from "../constants/httpStatus.js";

export default async(req, res, next) => {
  const accessToken = req.headers.access_token;
  const refreshToken = req.headers.refresh_token;

  if (!accessToken || !refreshToken) {
    return res.status(UNAUTHORIZED).send("Token不存在");
  }

  try {
    // 验证访问令牌
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    // 访问令牌无效,尝试使用刷新令牌
    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      // 根据id查询用户信息
      const user = await UserModel.findById(decoded.id);
      if (!user) {
        return res.status(UNAUTHORIZED).send("用户不存在");
      }

      // 生成新的访问令牌
      const newAccessToken = jwt.sign(
        {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      // 在响应头中返回新的访问令牌
      res.setHeader("access_token", newAccessToken);

      req.user = decoded;
      return next();
    } catch (error) {
      return res.status(ALL_TOKEN_EXPIRED).send("Token已过期,请重新登录");
    }
  }
};
