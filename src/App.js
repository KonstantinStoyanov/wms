import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthPage from "./components/AuthPage/AuthPage";
import Users from "./components/Users/Users";
import AddProduct from "./components/ManageWarehouses/ManageWarehouses";
import MoveProduct from "./components/MoveProduct/MoveProduct";
import FindProduct from "./components/FindProduct/FindProduct";
import Login from "./components/Login/Login";
import "./wms.css";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import * as React from "react";
import { useState } from "react";
import { WarehouseProvider } from "./context/WarehouseContext";
import * as warehouseService from "./services/warehouseService";

function App() {
  return (
    <div className="container">
      <AuthContextProvider>
        <WarehouseProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />

            <Route path="/*" element={<ProtectedRoutes />}>
              <Route path="move-product" element={<MoveProduct />} />
              <Route path="product" element={<FindProduct />} />
              <Route path="warehouse" element={<AddProduct />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </WarehouseProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
