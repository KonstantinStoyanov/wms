import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.js";
import * as userService from "../services/userService";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.js";
const UserContext = createContext();
export const UserAuth = () => {
  return useContext(UserContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const createNewUser = async (email, password, name, type) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(user);

      await userService.setUser(user.uid, {
        email: user.email,
        uid: user.uid,
        name: name,
        type: type,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser != null) {
        return userService.getUser(currentUser.uid).then((data) => {
          currentUser = { ...currentUser, data };
          setUser(currentUser);
          setLoading(false);
          return;
        });
      }
      setUser(currentUser);
      setLoading(false);
      return;
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ createNewUser, user, logout, signIn }}>
      {!loading ? children : <LoadingSpinner />}
    </UserContext.Provider>
  );
};
