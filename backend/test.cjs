const mongoose = require("mongoose");

async function testConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://mongorolls:dntkoj6Ti2OspYLh@cluster0.g1mgpn5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB 连接成功！");
  } catch (error) {
    console.error("MongoDB 连接失败:", error.message);
  } finally {
    await mongoose.connection.close();
  }
}

testConnection();

