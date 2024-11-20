import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>404</h1>
        <h2>页面未找到</h2>
        <p>抱歉，您访问的页面不存在</p>
        <Link to="/" className={classes.home}>
          返回首页
        </Link>
      </div>
    </div>
  );
}
