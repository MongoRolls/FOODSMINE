# 在线食品订单系统

## 项目简介

基于 `react-router-dom` `axios` `createContext` `react-toastify` `react-hook-form` `leaflet & react-leaflet` `express` `nodemon` `cors` `jsonwebtoken` `dotenv` `bcryptjs` `express-async-handler` 等开发一款 PC 端「在线食品订单」Web 项目, UI 界面参考了 DoorDash。

## 在线预览

项目地址：[https://foodsmine-1.onrender.com/](https://foodsmine-1.onrender.com/)

## 改造

早期练习项目，比较简单，看看加加新东西

- 双token更新机制
- 大文件上传
- 工程化
- CI/CD

## todo

- user页面

## 界面展示

<img src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/image-20240404175739323.png" width="70%" height="70%" />

**登录页面**

<img src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/image-20240404175835899.png" width="70%" height="70%" />

**商品页面**

<img src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/20240404180603.png" width="70%" height="70%" />

**购物车**

<img src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/20240404180649.png" width="70%" height="70%" />

**结算页面**

<img src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/20240404180819.png" width="70%" height="70%" />

**支付页面**

<img src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/20240404180928.png" width="70%" height="70%" />

**订单详情**

<img src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/20240404181101.png" width="70%" height="70%" />

**设置界面**

<img src="https://mongorolls-images.oss-cn-shenzhen.aliyuncs.com/img/20240404181230.png" width="70%" height="70%" />

### 本地开发

1. 克隆代码到本地
2. 配置 `.env` 文件
3. 分别启动前后端项目

```bash
npm instal安装依赖

npm run dev`
```

```bash
`npm install`安装依赖

`npm start`
```

### 服务器

```bash
npm run build

npm start
```

### 配置信息

```bash
TEXT_ACCOUNT = "sb-7sgtq29810274@personal.example.com"
TEXT_PASSWWORD = "Qq6Y4nY^"
MONGO_URI = ""
JWT_SECRET =  "" //自己设定16-40
CLOUDINARY_CLOUD_NAME= ""
CLOUDINARY_API_KEY = ""
CLOUDINARY_API_SECRET= ""
```
