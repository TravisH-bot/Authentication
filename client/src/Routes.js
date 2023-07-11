import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";
import PleaseVerifyEmailPage from "./pages/PleaseVerifyEmailPage";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoute from "./auth/PrivateRoute";
import EmailVerificationLandingPage from "./pages/EmailVerificationLandingPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import PasswordResetLandingPage from "./pages/PasswordResetLandingPage";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<UserInfoPage />} />
        </Route>
        <Route
          path="/verify-email/:verificationString"
          element={<EmailVerificationLandingPage />}
        />
        <Route
          path="/reset-password/:passwordResetCode"
          element={<PasswordResetLandingPage />}
        />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/please-verify" element={<PleaseVerifyEmailPage />} />
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};
