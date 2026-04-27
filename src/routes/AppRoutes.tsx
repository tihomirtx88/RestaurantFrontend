import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomaPage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoutes";
import Layout from "../components/Layout";
import MenuPage from "../pages/MenuPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import BookingPage from "../pages/BookingPage";
import TestimonialPage from "../pages/TestimonialPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />

          {/* public  */}
          <Route path="/" element={<HomaPage />} />

          {/* Protected */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div>Dashboard</div>
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
