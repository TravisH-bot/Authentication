import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoute from "./auth/PrivateRoute";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<UserInfoPage />} />
        </Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};
