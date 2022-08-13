import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Home = () => {
  const { user, logout } = UserAuth();
  // const [isLoading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(user);
  return (
    <main id="wms-index" className="wms-index">
      <div className="header">
        <h1>Warehouse Management</h1>

        {user?.uid ? (
          <div className="profile">
            <div className="profile_picture"></div>
            <h3 className="profile_name">Welcome {user.data.name}</h3>
            <p className="profile_title">Type: {user.data.type}</p>
          </div>
        ) : (
          <>
            <h3>Welcome Guest</h3>
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </>
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
        {user ? (
          <li className="pages-item">
            <Link to="/" className="pages-link" onClick={handleLogout}>
              <div className="pages-card">
                <div className="pages-card_content">
                  <h3>Logout</h3>
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
        ) : (
          ""
        )}
      </ul>
    </main>
  );
};
export default Home;
