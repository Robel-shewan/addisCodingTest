import React from "react";
import { Route, Routes } from "react-router-dom";
import EditEmployee from "./pages/EditEmployee";
import Employees from "./pages/Employees";
import NewEmployee from "./pages/NewEmployee";
import PageNotFound from "./pages/NotFound/PageNotFound";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/employee/edit/:_id" element={<EditEmployee />} />
        <Route path="/employee/new" element={<NewEmployee />} />
        <Route path="/" element={<Employees />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
