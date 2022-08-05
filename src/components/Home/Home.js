import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import Login from "../Login/Login";
const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main id="wms-index" className="wms-index">
      <div className="header">
        <h1>Warehouse Management</h1>

        {user?.uid ? (
          <div className="profile">
            <div className="profile_picture"></div>
            <h3 className="profile_name">Konstantin Stoyanov</h3>
            <p className="profile_title">Warehouse staff</p>

            <button onClick={handleLogout} className="border px-6 py-2 my-4">
              Logout
            </button>
          </div>
        ) : (
          <Login />
        )}
      </div>
      <ul className="pages-container">
        <li className="pages-item">
          <Link to="/move-product" className="pages-link">
            <div className="pages-card">
              <div className="pages-card_content">
                <h3>Move Products</h3>
                <p>Move, arrange and assign shelves to products.</p>
              </div>
              <div className="pages-card_img">
                <img src="/images/storage-worker.jpg" alt="" />
              </div>
            </div>
          </Link>
        </li>
        <li className="pages-item">
          <Link to="/find-product" className="pages-link">
            <div className="pages-card">
              <div className="pages-card_content">
                <h3>Find Product</h3>
                <p>Find where specific product is located in the warehouse.</p>
              </div>
              <div className="pages-card_img">
                <img src="/images/storage-worker.jpg" alt="" />
              </div>
            </div>
          </Link>
        </li>
        <li className="pages-item">
          <Link to="/add-product" className="pages-link">
            <div className="pages-card">
              <div className="pages-card_content">
                <h3>Add Product </h3>
                <p>Track the movements history of a product.</p>
              </div>
              <div className="pages-card_img">
                <img src="/images/storage-worker.jpg" alt="" />
              </div>
            </div>
          </Link>
        </li>
        <li className="pages-item">
          <Link to="/users" className="pages-link">
            <div className="pages-card">
              <div className="pages-card_content">
                <h3>Users</h3>
                <p>
                  Time to go home and let someone else handle the warehouse.
                </p>
              </div>
              <div className="pages-card_img">
                <img src="/images/storage-worker.jpg" alt="" />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </main>
  );
};
export default Home;
