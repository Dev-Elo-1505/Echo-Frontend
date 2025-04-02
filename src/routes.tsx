import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";
import Feedpage from "./pages/Feedpage";
import CreatePetitionPage from "./pages/CreatePetitionPage";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import EmailSignUpPage from "./pages/auth/EmailSignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, 
        element: <Navigate to="/auth" replace />, // Redirects to /auth if no path is provided
      },
      {
        path: "auth",
        element: <PublicRoute />, // Restricts login/signup for logged-in users
        children: [
          { index: true, element: <LoginPage /> }, // Login is the first page
          { path: "signup", element: <SignUpPage /> },
          {path: "signup/email", element: <EmailSignUpPage />}
        ],
      },
      {
        path: "app",
        element: <ProtectedRoute />, // Protects routes under /app
        children: [
          { path: "feed", element: <Feedpage /> }, // Shown after login
          { path: "create-petition", element: <CreatePetitionPage /> },
        ],
      },
    ],
  },
]);

export default router;
