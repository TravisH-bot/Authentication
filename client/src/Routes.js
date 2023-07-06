import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserInfoPage />} />
      </Routes>
    </Router>
  );
};
