import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Blog from '../../pages/Blog/Blog';
import Checkout from '../../pages/Checkout/Checkout';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
import Courses from '../../pages/Courses/Courses';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Register from '../../pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_SERVER_API_ROOT}/course/${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);
