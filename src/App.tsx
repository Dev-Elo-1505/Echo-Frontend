import { Outlet,  useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/auth/signup" || location.pathname === "/auth/login";
  return (
    <div>
      {!hideHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
