import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/UI/Header/Sticky-Header';
import HomePage from './pages/Home';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
        children: [
          {
            path: '/:cart',
            element: <HomePage/>,
          },
        ],
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
