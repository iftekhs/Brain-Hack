import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
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
        path: '/courses/:id',
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_SERVER_API_ROOT}/courses/${params.id}`),
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_SERVER_API_ROOT}/course/${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);
