import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {

    
    const host = "https://backend-my-tales.vercel.app";


    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to handle login

    const login = async (email, password) => {
        // Perform login logic

        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json();
        if (json.success) {
            // save the authToken and redirect.
            localStorage.setItem('token', json.authtoken);
            setIsAuthenticated({isAuthenticated:true});
            
        }
        else {
            alert("Invalid credentials");
        }
    }


    // Function to handle signup
    const signup = async (name, email, password) =>  {
        // Perform signup logic
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        if (json.success) {
            // save the authToken and redirect.
            localStorage.setItem('token', json.authtoken);
            setIsAuthenticated({isAuthenticated:true});
            
            
        }
        else {
            alert("Invalid credentials");
        }
        
    };

    // Function to handle logout
    const logout = () => {
        // Perform logout logic
        localStorage.removeItem('token');
        setIsAuthenticated({isAuthenticated:false});

    };



    // Value to be provided to consumers of AuthContext
    const authContextValue = {
        isAuthenticated,
        login,
        signup,
        logout,
    };


    return (
        <AuthContext.Provider value={authContextValue}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthState;
