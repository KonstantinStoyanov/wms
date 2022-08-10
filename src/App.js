import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthPage from "./components/AuthPage/AuthPage";
import Users from "./components/Users/Users";
import AddProduct from "./components/AddProduct/AddProduct";
import MoveProduct from "./components/MoveProduct/MoveProduct";
import FindProduct from "./components/FindProduct/FindProduct";
import Login from "./components/Login/Login";
import "./wms.css";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import * as React from "react";
// const Home = React.lazy(() => import("./components/Home/Home"));
function App() {
  return (
    <div className="container">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="move-product" element={<MoveProduct />} />
            <Route path="find-product" element={<FindProduct />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
