import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "../../services/userService";
// import { db } from "../firebase";
// import {
//   doc,
//   getDocs,
//   setDoc,
//   deleteField,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";

const CreateUser = ({ handleShowLogin }) => {
  const { createNewUser, user } = UserAuth();
  // const { setUser } = userService.setUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("guest");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  function handleSelectChange(event) {
    setType(event.target.value);
  }
  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log(email, password, name, type);
      await createNewUser(email, password, name, type);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmitCreate}
        autoComplete="new-password"
        className="login-form"
      >
        <p>Create account</p>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
            autoComplete="new-password"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
            autoComplete="new-password"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3"
            type="text"
            autoComplete="new-password"
          />
        </div>
        {user?.type === "admin" ? (
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Type</label>
            <select value={type} onChange={(e) => handleSelectChange(e)}>
              <option value="guest">Guest</option>
              <option value="worker">Worker</option>
              <option value="officeWorker">Office Worker</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        ) : (
          ""
        )}

        <button className="btn-submit">create</button>
        <button
          className="btn-submit secondary"
          onClick={() => handleShowLogin()}
        >
          Go to Sign Up Form
        </button>
      </form>
    </>
  );
};
export default CreateUser;
