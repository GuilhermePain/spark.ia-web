import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPage } from "./pages/LandingPage/index.jsx";
import { Chat } from "./pages/Chat/index.jsx";
import { Error404 } from "./pages/Errors/404/index.jsx";
import SignIn from "./pages/SignIn/index.jsx";
import SingUp from "./pages/SignUp/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./input.css";
import Home from "./pages/Home/index.jsx";
import { Questions } from "./pages/Questions/index.jsx";
import Enem from "./pages/Enem/index.jsx";
import Flashcards from "./pages/Flashcards/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error404 />,
  },
  {
    path: "/entrar",
    element: <SignIn />,
    errorElement: <Error404 />,
  },
  {
    path: "/cadastro",
    element: <SingUp />,
    errorElement: <Error404 />,
  },
  {
    path: "/inicio",
    element: <Home />
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <Error404 />,
  },
  {
    path: "/flashcards",
    element: <Flashcards />,
    errorElement: <Error404 />,
  },
  {
    path: "/enem",
    element: <Enem />,
    errorElement: <Error404 />,
  },
  {
    path: "/enem/:prova/:questao",
    element: <Questions />,
    errorElement: <Error404 />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
