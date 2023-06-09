import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { PublicRoutes } from "./components/PublicRoutes";
import { TestRoutes } from "./components/TestRoutes";
import { AboutPage } from "./pages/AboutPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ErrorPage } from "./pages/ErrorPage";
import { IndexPage } from "./pages/IndexPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ResultPage } from "./pages/ResultPage";
import { TestPage } from "./pages/TestPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route element={<TestRoutes />}>
          <Route path="/test/:id" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
      </Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
