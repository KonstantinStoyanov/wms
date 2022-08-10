import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// import {
//   doc,
//   getDocs,
//   setDoc,
//   deleteField,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import * as userService from "../services/userService";
import { async } from "@firebase/util";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const getUserData = async (userId) => {
    let response = await userService.getUser(userId);

    const data = await response;
    return data;
  };
  const createNewUser = async (email, password, name, type) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // const { user } = await auth.createUser({
      //   email: "user@example.com",
      //   emailVerified: false,
      //   phoneNumber: "+11234567890",
      //   password: "secretPassword",
      //   displayName: "John Doe",
      //   photoURL: "http://www.example.com/12345678/photo.png",
      //   disabled: false,
      // });
      setUser(user);

      await userService.setUser(user.uid, {
        email: user.email,
        uid: user.uid,
        name: name,
        type: type,
      });

      // await setDoc(doc(db, "users", user.uid), );
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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        Promise.allSettled([userService.getUser(currentUser.uid)]).then(
          (data) => {
            currentUser.type = data.type;
            return setUser(currentUser);
          }
        );
      }
      console.log(state?.path || "/", "location");
      return navigate(state?.path || "/");
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createNewUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
