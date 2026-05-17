import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }: { children: JSX.Element }) {
  const { user, role } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (role?.toLocaleLowerCase() !== "admin") return <Navigate to="/" />;

  return children;
}

export default AdminRoute;