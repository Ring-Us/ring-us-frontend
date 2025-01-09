// src/main.tsx
/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";
//import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Login from "./routes/Login.tsx";

const globalStyles = css`
  body {
    overflow-x: hidden !important;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: "Arial", sans-serif;
    background-color: #f9fafb;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
