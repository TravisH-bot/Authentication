import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./useUser";

const PrivateRoute = (props) => {
  const user = useUser();

  if (!user) return <Navigate to="/login" />;

  return <Outlet {...props} />;
};

export default PrivateRoute;
