import { Route, Routes } from "react-router";
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
      <Route path="/" element={<IndexPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/test/:id" element={<TestPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
