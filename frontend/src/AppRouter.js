import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";

// 动态引入所有页面组件
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const FoodPage = lazy(() => import("./pages/Food/FoodPage")); 
const CartPage = lazy(() => import("./pages/Cart/CartPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const AuthRoute = lazy(() => import("./components/AuthRoute/AuthRoute"));
const CheckoutPage = lazy(() => import("./pages/Checkout/CheckoutPage"));
const PaymentPage = lazy(() => import("./pages/Payment/PaymentPage"));
const OrderTrackPage = lazy(() => import("./pages/OrderTrack/OrderTrackPage"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage"));
const OrderPage = lazy(() => import("./pages/Orders/OrdersPage"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const AdminRoute = lazy(() => import("./components/AdminRoute/AdminRoute"));
const FoodsAdminPage = lazy(() => import("./pages/FoodsAdmin/FoodsAdminPage"));
const FoodEditPage = lazy(() => import("./pages/FoodEdit/FoodEditPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<HomePage />} />
        <Route path="/tag/:tag" element={<HomePage />} />
        <Route path="/food/:id" element={<FoodPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/checkout"
          element={
            <AuthRoute>
              <CheckoutPage />
            </AuthRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <AuthRoute>
              <PaymentPage />
            </AuthRoute>
          }
        />
        <Route
          path="/track/:orderId"
          element={
            <AuthRoute>
              <OrderTrackPage />
            </AuthRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <ProfilePage />
            </AuthRoute>
          }
        />
        <Route
          path="/orders/:filter?"
          element={
            <AuthRoute>
              <OrderPage />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          }
        />
        <Route
          path="/admin/foods/:searchTerm?"
          element={
            <AdminRoute>
              <FoodsAdminPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/addFood"
          element={
            <AdminRoute>
              <FoodEditPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/editFood/:foodId?"
          element={
            <AdminRoute>
              <FoodEditPage />
            </AdminRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
