import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import HeroSection from "./components/HeroSection";
import WarriorModal from "./components/WarriorModal";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register";

function App() {

  const user = localStorage.getItem('user');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Layout /> : <Navigate to="/login" />} />
          {user && (
            <Route path="/" element={<Layout />}>
              <Route index element={<HeroSection />} />
              <Route path="/people/:id" element={<WarriorModal />} />
            </Route>
          )}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
