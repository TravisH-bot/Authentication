import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const user = null;

  if (!user) return <Navigate to="/login" />;

  return <Outlet {...props} />;
};

export default PrivateRoute;
