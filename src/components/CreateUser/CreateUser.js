import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const { createNewUser } = UserAuth();
const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createNewUser(email, password, "kosi");
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <form onSubmit={handleSubmitCreate}>
      <div className="flex flex-col py-2">
        <label className="py-2 font-medium">Email Address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3"
          type="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 font-medium">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3"
          type="password"
        />
      </div>
      <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
        create
      </button>
    </form>
  );
};
export default CreateUser;
