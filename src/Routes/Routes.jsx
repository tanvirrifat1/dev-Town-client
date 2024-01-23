import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/home/Home";

import Login from "../pages/Login/Login";
import SignUp from "../pages/signIn/SignIn";

import PrivateRoute from "./PrivateRoute";

import Dashboard from "../Layout/Dashboard";

import AllUser from "../pages/DashBoard/AllUsers/AllUser";

import ErrorPage from "../components/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/secret",
        element: <PrivateRoute></PrivateRoute>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "dashBoard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "allUsers",
        element: <AllUser />,
      },
    ],
  },
]);