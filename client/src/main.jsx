import React from "react";
import ReactDOM from "react-dom/client";
import { Landing } from "./pages/Landing.jsx";
import { Chat } from "./pages/Chat.jsx";
import { Erro } from "./pages/Erro.jsx";
import { Erro404 } from "./pages/Erro404.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./input.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Erro />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Erro />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
    errorElement: <Erro />,
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <Erro />,
  },
  {
    path: "*",
    element: <Erro404 />,
    errorElement: <Erro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
