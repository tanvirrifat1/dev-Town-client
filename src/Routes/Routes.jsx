import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/home/home/Home';

import Login from '../pages/Login/Login';
import SignUp from '../pages/signIn/SignIn';

import PrivateRoute from './PrivateRoute';

import Dashboard from '../Layout/Dashboard';

import ErrorPage from '../components/Error/ErrorPage';
import SaveTask from '../components/SaveTask/SaveTask';
import TaskUpdated from '../components/SaveTask/TaskUpdated';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/save',
        element: <SaveTask />,
      },
      {
        path: '/task/:id',
        element: <TaskUpdated />,
      },

      {
        path: '/secret',
        element: <PrivateRoute></PrivateRoute>,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
