import { useUser } from "@clerk/react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;