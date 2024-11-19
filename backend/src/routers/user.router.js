import { Router } from "express";
import jwt from "jsonwebtoken";
import { BAD_REQUEST } from "../constants/httpStatus.js";
const router = Router();
import handler from "express-async-handler";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import auth from "../middleware/auth.mid.js";
const PASSWORD_HASH_SALT_ROUNDS = 10;
router.post(
  "/register",
  handler(async (req, res) => {
    const { name, email, password, address } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      res.status(BAD_REQUEST).send("用户已存在,请直接登录!");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      password,
      PASSWORD_HASH_SALT_ROUNDS
    );

    const newUser = {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      address,
    };

    const result = await UserModel.create(newUser);
    const tokens = generateTokenResponse(result);
    res.send(tokens);
  })
);

router.post(
  "/login",
  handler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const tokens = generateTokenResponse(user);
      res.send(tokens);
      return;
    }

    res.status(BAD_REQUEST).send("用户名或密码错误");
  })
);

router.post(
  "/refresh",
  handler(async (req, res) => {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
      res.status(BAD_REQUEST).send("刷新令牌不存在");
      return;
    }

    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const token = jwt.sign(
        {
          id: decoded.id,
          email: decoded.email,
          isAdmin: decoded.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.send({ token });
    } catch (error) {
      res.status(BAD_REQUEST).send("刷新令牌无效");
    }
  })
);

router.put(
  "/updateProfile",
  auth,
  handler(async (req, res) => {
    const { name, address } = req.body;
    const user = await UserModel.findByIdAndUpdate(
      req.user.id,
      { name, address },
      { new: true }
    );

    const tokens = generateTokenResponse(user);
    res.send(tokens);
  })
);

router.put(
  "/changePassword",
  auth,
  handler(async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const user = await UserModel.findById(req.user.id);

    if (!user) {
      res.status(BAD_REQUEST).send("修改密码失败!");
      return;
    }

    const equal = await bcrypt.compare(currentPassword, user.password);

    if (!equal) {
      res.status(BAD_REQUEST).send("当前密码不正确!");
      return;
    }

    user.password = await bcrypt.hash(newPassword, PASSWORD_HASH_SALT_ROUNDS);
    await user.save();

    res.send();
  })
);

const generateTokenResponse = (user) => {
  const access_token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );

  const refresh_token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "7d"
    }
  );

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    access_token,
    refresh_token,
  };
};

export default router;
