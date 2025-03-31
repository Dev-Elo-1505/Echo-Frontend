import { Outlet,  useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  const location = useLocation();

  const hideHeader = location.pathname === "/auth" || location.pathname === "/auth/signup"
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
