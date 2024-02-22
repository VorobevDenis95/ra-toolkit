import {createBrowserRouter} from 'react-router-dom';
import Main from '../pages/Main';
import ErrorPage from '../pages/ErrorPage';
import CardPage from '../pages/CardPage';
import Header from '../components/Header';
import Favorite from '../pages/Favorite';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Main />
      },

      {
        path: '/films/:id',
        element: <CardPage />,
      },
      {
        path: '/favorites',
        element: <Favorite />
      }
    ]
  },

  ]
)