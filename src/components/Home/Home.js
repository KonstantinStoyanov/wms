import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

import Login from "../Login/Login";
import CreateUser from "../CreateUser/CreateUser";
import * as userService from "../../services/userService";
const Home = () => {
  const { user, logout } = UserAuth();
  const [showLogin, setShowLogin] = useState(true);
  console.log(user);
  // const { currentUserData, setCurrentUserData } = useState(() => {
  //   if (user) {
  //     return getUser(user.uid);
  //   } else {
  //     return null;
  //   }
  // });
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

  const handleShowLogin = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };
  // const getUser = async () => {
  //   const usersCollectionRef = collection(db, "user", `${user.uid}`);
  //   const data = await getDocs(usersCollectionRef);
  //   console.log(data);
  // };

  // if (user?.uid) {
  //   getUser();
  // }
  // const getUser = async (userId) => {
  //   const userData = await userService.getUser(userId);
  //   // setCurrentUserData;
  //   return userData;
  // };
  // useEffect(() => {
  // if (user) {
  //  return setCurrentUserData = getUser(user.uid);
  // }},[]);
  // console.log(currentUser);
  // useEffect(() => {
  //   let userData;
  //   if (user) {
  //     userData = userService.getUser(user.uid);
  //   }

  //   return () => {
  //     console.log(userData);
  //   };
  // }, []);

  return (
    <main id="wms-index" className="wms-index">
      <div className="header">
        <h1>Warehouse Management</h1>

        {user?.uid ? (
          <div className="profile">
            <div className="profile_picture"></div>
            <h3 className="profile_name">{user.name}</h3>
            <p className="profile_title">{user.title}</p>

            <button onClick={handleLogout} className="border px-6 py-2 my-4">
              Logout
            </button>
          </div>
        ) : showLogin ? (
          <Login handleShowLogin={handleShowLogin} />
        ) : (
          <CreateUser handleShowLogin={handleShowLogin} />
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
