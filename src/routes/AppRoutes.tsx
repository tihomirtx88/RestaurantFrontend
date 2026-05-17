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
import MyReservationsPage from "../pages/MyReservationsPage";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import MenuManager from "../pages/admin/MenuManager";
import CreateMenuItem from "../pages/admin/CreateMenuItem";
import EditMenuItem from "../pages/admin/EditMenuItem";

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

          <Route
            path="/my-reservations"
            element={
              <ProtectedRoute>
                <MyReservationsPage />
              </ProtectedRoute>
            }
          />

          {/* public  */}
          <Route path="/" element={<HomaPage />} />

          {/* ADMIN ROUTES */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/menu"
            element={
              <AdminRoute>
                <MenuManager />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/menu/create"
            element={
              <AdminRoute>
                <CreateMenuItem />
              </AdminRoute>
            }
          />
        </Route>

        <Route
          path="/admin/menu/edit/:id"
          element={
            <AdminRoute>
              <EditMenuItem />
            </AdminRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
