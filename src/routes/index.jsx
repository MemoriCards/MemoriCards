import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { ErrorPage } from "../pages/ErrorPage/index.tsx";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
