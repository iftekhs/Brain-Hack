import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Courses from '../pages/Courses/Courses';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Register from '../pages/Register/Register';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);
