import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Employees from './pages/Employees';
import EmployeeDetails from './pages/EmployeeDetails';
import Report from './pages/Report';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/employees',
    element: <Employees />,
  },
  { path: '/employees/:pageId', element: <EmployeeDetails /> },
  { path: '/report', element: <Report /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
