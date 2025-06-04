import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Feedback from './pages/Feedback.tsx';
import SingleTip from './pages/SingleTip.tsx';
import SingleFeedback from './pages/SingleFeedback.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/feedback',
        element: <Feedback />,
      },
      {
        path: '/tip/:id',
        element: <SingleTip />,
      },
      {
        path: '/feedback/:id',
        element: <SingleFeedback />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
