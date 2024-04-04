## 项目简介



### 技术栈



基于 `react-router-dom` `axios` `createContext`  `react-toastify`  `react-hook-form` `leaflet & react-leaflet` `express` `nodemon` `cors ` `jsonwebtoken` `dotenv` `bcryptjs ` `express-async-handler`等开发一款PC端「在线食品订单」 Web项目，UI 界面参考了doordash。

## 预览地址



- 项目在线预览地址：[https://foodsmine-1.onrender.com/](https://foodsmine-1.onrender.com/)



## 界面和功能展示



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



### TO-DO-LIST

* Users page
* 管理员 Edit user
* Email Recepit

## 技术栈



### 前端

- `React`：用于构建用户界面的 `MVVM` 框架
- `axios`: 发送网络请求，请求拦截和响应拦截
- `react-router`：为单页面应用提供的路由系统
- `react-conText`: 提供用户权限，加载页面
- `jwt`: 实现登录注册功能



web vital

### 后端



- `Node.js`：利用 `Express` 搭建的本地测试服务器

- `env`: 隐藏配置信息,防止泄露

- `bcryptjs`: 加密token

- `paypal api`: 

  

## 构建项目

### 本地

- 克隆代码到本地之后
- 分别在前后端启动项目
- 配置`.env`信息

**backend:**

```
`npm install`安装依赖

`npm run dev`
```

**frontend:**

```
`npm install`安装依赖

`npm start`
```

### 服务器

```
npm run build

npm start
```

### 配置信息

```
TEXT_ACCOUNT = "sb-7sgtq29810274@personal.example.com"
TEXT_PASSWWORD = "Qq6Y4nY^"


MONGO_URI = ""
JWT_SECRET =  "" //自己设定16-40
CLOUDINARY_CLOUD_NAME= ""
CLOUDINARY_API_KEY = ""
CLOUDINARY_API_SECRET= ""


```

