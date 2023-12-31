import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PleaseVerifyEmailPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <div className="content-container">
      <h1>Thanks for Signing Up!</h1>
      <p>
        A verification email has been send to the email address you provided.
        Please verify your email to unlock full site features. You will be
        re-directed to your User Info page after a few seconds.
      </p>
    </div>
  );
};

export default PleaseVerifyEmailPage;
