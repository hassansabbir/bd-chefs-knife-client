import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Register from "./components/Register/Register.jsx";
import ViewRecipe from "./components/ViewRecipe/ViewRecipe.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivetRout from "./components/PrivetRout/PrivetRout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://bd-chefs-knife-server-hassansabbir.vercel.app/chefs"),
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivetRout>
            <ViewRecipe></ViewRecipe>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bd-chefs-knife-server-hassansabbir.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer position="top-center" autoClose={3000} />
  </React.StrictMode>
);
