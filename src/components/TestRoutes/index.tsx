import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { cardContext } from "../../providers/cardContext";

export const TestRoutes = () => {
  const { isTesting } = useContext(cardContext);

  return isTesting ? <Outlet /> : <Navigate to="/dashboard" />;
};
