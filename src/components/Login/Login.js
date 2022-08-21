import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Header from "../Header/Header";
const Login = ({ handleShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      {/*  */}

      <form
        onSubmit={handleSubmit}
        autoComplete="new-password"
        className="login-form"
      >
        <p>Login to account</p>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border p-3"
            type="email"
            autoComplete="new-password"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border p-3"
            type="password"
            autoComplete="new-password"
          />
        </div>
        <button className="btn-submit">Sign In</button>

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

export default Login;
