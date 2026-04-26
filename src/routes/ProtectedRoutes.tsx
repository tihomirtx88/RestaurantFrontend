import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}: {children: JSX.Element}){

    const auth = useAuth();

    if (!auth.user) {
      return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;