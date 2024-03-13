import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login.jsx'
import ErrorPage from "./error-page";
import Home from "./routes/Home.jsx"
import Users from "./routes/Users.jsx"
import Reports from "./routes/Reports.jsx"
import Prices from "./routes/Prices.jsx"
import Campaigns from "./routes/Campaigns.jsx"
import Meds from "./routes/Meds.jsx"
import CreateUser from "./routes/CreateUser.jsx"
import EditUser from "./routes/EditUser.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId/edit",
        element: <EditUser />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "prices",
        element: <Prices />,
      },
      {
        path: "campaigns",
        element: <Campaigns />,
      },
      {
        path: "meds",
        element: <Meds />,
      },
      {
        path: "users/create-user",
        element: <CreateUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
