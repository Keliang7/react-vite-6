// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home"; // 你的页面
import Login from "@/pages/Login"; // 有的话继续加

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 根布局 -> 对应 <Outlet />
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <div>404</div> },
    ],
  },
]);
