import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute.js";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute.js";
import { forgotPasswordRoute } from "./forgotPasswordRoute.js";
import { loginRoute } from "./loginRoute.js";
import { signUpRoute } from "./signUpRoute.js";
import { testEmailRoute } from "./testEmailRoute.js";
import { testRoute } from "./testRoute.js";
import { updateUserInfoRoute } from "./updateUserInfoRoute.js";
import { realEmailRoute } from "./testEmailRoute.js";
import { verifyEmailRoute } from "./verifyEmailRoute.js";
import { resetPasswordRoute } from "./resetPasswordRoute.js";

export const routes = [
  forgotPasswordRoute,
  getGoogleOauthUrlRoute,
  googleOauthCallbackRoute,
  loginRoute,
  signUpRoute,
  resetPasswordRoute,
  testEmailRoute,
  realEmailRoute,
  testRoute,
  updateUserInfoRoute,
  verifyEmailRoute,
];
