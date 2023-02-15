import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/loginpage';
import RegistrationPage from './pages/registrationpage';
import ProblemsPage from './pages/problemspage';
import SampleProblemPage from './pages/sampleproblem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegistrationPage />,
  },
  {
    path: "problems",
    element: <ProblemsPage />,
  },
  // For the next page, create dynamic routing to route to a given problem
  {
    path: "sampleproblem",
    element: <SampleProblemPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
