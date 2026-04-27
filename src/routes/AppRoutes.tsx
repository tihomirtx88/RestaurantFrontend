import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomaPage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoutes";

function AppRoutes(){
    return(
        <BrowserRouter>
          <Navbar/>

          <Routes>
        {/* публични */}
        <Route path="/" element={<HomaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* защитен */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div>Dashboard</div>
            </ProtectedRoute>
          }
        />
      </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;