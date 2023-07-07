import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";
import LogInPage from "./pages/LoginPage";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserInfoPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </Router>
  );
};
