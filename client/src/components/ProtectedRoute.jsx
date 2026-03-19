//Protect routes that are only accessible to authenticated users
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // 🚫 Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // 🚫 Not admin
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  // ✅ Allowed
  return children;
};

export default ProtectedRoute;
