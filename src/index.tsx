import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./css/style.css";
import "./css/custom.css";
import Home from "./pages/Home";
import Sabores from "./pages/Sabores";
import Embalagem from "./pages/Embalagem";
import ErrorPage from "./pages/ErrorPage";
import Contatos from "./pages/Contatos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "Sabores", element: <Sabores /> },
      { path: "Embalagem", element: <Embalagem /> },
      { path: "/contatos/:id", element: <Contatos /> },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
