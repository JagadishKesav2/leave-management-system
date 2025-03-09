import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/Login";
import { DashboardLayout } from "./layout/DashboardLayout";
import { DASHBOARD, HOME, LEAVE_REQ_FORM, LEAVE_REQUESTS, LOGIN, NOT_FOUND } from "./constants/routes";

const PrivateRoutes = () => {
  const token = useAuth();
  return token ? <DashboardLayout /> : <Navigate to={LOGIN} />;
};

const PublicRoutes = () => {
  const token = useAuth();
  return token ? <Navigate to={DASHBOARD} /> : <Outlet />;
};

export const AppRoutes = () =>
  useRoutes([
    {
      path: HOME,
      element: <Navigate to={DASHBOARD} replace />,
    },
    {
      path: DASHBOARD,
      element: <PrivateRoutes />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    {
      path: LEAVE_REQ_FORM,
      element: <PrivateRoutes />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    {
      path: LEAVE_REQUESTS,
      element: <PrivateRoutes />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    {
      path: LOGIN,
      element: <PublicRoutes />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: NOT_FOUND,
      element: <Navigate to={DASHBOARD} replace />,
    },
  ]);
