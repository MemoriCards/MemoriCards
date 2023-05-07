import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { userContext } from "../../providers/userContext";
import { Header } from "../Header";

export const PublicRoutes = () => {
  const { user } = useContext(userContext);

  return !user ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/dashboard" />
  );
};
