import { useState } from "react";
import { useLocation } from "react-router-dom";
import Login from "../Login/Login";
import CreateUser from "../CreateUser/CreateUser";
const AuthPage = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const handleShowLogin = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };
  const { state } = useLocation();
  const [showAuth, setShowAuth] = useState(
    state?.showAuth && state.showAuth != null ? state.showAuth : false
  );
  return (
    <>
      {state?.showAuth && state.showAuth ? (
        <>Please Login to see this page</>
      ) : (
        ""
      )}
      {showLogin ? (
        <Login handleShowLogin={handleShowLogin} />
      ) : (
        <CreateUser handleShowLogin={handleShowLogin} />
      )}
    </>

    //     { showLogin ? (
    //    <Login handleShowLogin={handleShowLogin} />

    //   ) : (
    //     <CreateUser handleShowLogin={handleShowLogin} />
    //  ) }
    //     { showLogin ? (
    //     <Login handleShowLogin={handleShowLogin} />

    //   ) : (
    //     <CreateUser handleShowLogin={handleShowLogin} />
    //  ) } )
  );
};
export default AuthPage;
