import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {

    const [AuthName, setAuthName] = useState("");
    const host = "http://localhost:5000";

    // Get user name || Login required 

    const getUser = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setAuthName(json.name);
    }

    const userContextValue = {
        getUser,
        AuthName
    };

    return (
        <UserContext.Provider value={userContextValue} >
            {props.children}
        </UserContext.Provider>
    );

}

export default UserState;