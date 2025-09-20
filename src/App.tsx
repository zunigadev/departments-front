import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './shared/components/Layout/Layout';
import { appRoutes } from './app/config/routes.config';

const RootLayout = () => (
  <AppLayout />
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: appRoutes,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;