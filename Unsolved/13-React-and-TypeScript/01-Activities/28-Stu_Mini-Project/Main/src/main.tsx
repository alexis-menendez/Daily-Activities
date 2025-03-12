import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import FilmSearch from './pages/FilmSearch.tsx';
import WatchList from './pages/WatchList.tsx';
import SeenIt from './pages/SeenIt.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <FilmSearch />,
      },
      {
        path: '/WatchList',
        element: <WatchList />,
      },
      {
        path: '/SeenIt',
        element: <SeenIt />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
