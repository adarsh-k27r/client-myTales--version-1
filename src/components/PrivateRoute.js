import React, { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import {Navigate} from 'react-router-dom';



const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated || localStorage.getItem('token') ? children : <Navigate to="/login" />;
  };

  export default PrivateRoute;
