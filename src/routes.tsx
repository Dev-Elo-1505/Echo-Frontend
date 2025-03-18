import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";
import Feedpage from "./pages/Feedpage";
import CreatePetitionPage from "./pages/CreatePetitionPage";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Feedpage />
            },
            {
                path: "create-petition",
                element: <CreatePetitionPage />
            },
            {
                path: "auth",
                children: [
                    {path: "signup", element: <SignUpPage />},
                    {path: "login", element: <LoginPage />},
                ]
            }
        ]
    }
]);

export default router;