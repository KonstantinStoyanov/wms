import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import AddProduct from "./components/AddProduct/AddProduct";
import MoveProduct from "./components/MoveProduct/MoveProduct";
import FindProduct from "./components/FindProduct/FindProduct";
import Login from "./components/Login/Login";
import "./wms.css";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="container">
      <AuthContextProvider>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/move-product" element={<MoveProduct />} />
          <Route path="/find-product" element={<FindProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/users" element={<Users />} />

          {/* <Route path="/login" element={<Login />} />
      <Route
        path="/register"
        element={
          <Suspense fallback={<span>Loading....</span>}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="/create"
        element={<CreateGame addGameHandler={addGameHandler} />}
      />
      <Route path="/catalog" element={<Catalog games={games} />} />
      <Route
        path="/catalog/:gameId"
        element={<GameDetails games={games} addComment={addComment} />}
      /> */}
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
