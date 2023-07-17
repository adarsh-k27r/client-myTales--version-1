import React, { useContext, useEffect } from "react";
import Blogitem from './Blogitem';
import "../stylesheets/styles.css";
import "../stylesheets/UserDashboard.css";
import blogAvatar from '../images/blog_avatar.svg';
import UserContext from "../context/user/UserContext";



function UserDashboard() {

    const context = useContext(UserContext);
    const { getUser, AuthName } = context;

    useEffect(()=>{
        getUser()
    }, []);

    return (
        <>

            <div className="fullbgr">

                <div className="cardBgr">

                    <h3>Your Stories</h3>

                    <section className="sec1-v">

                        <Blogitem />


                    </section>

                </div>

                <div className="rbgr">
                    <img src={blogAvatar} alt="Pic" className="rbgrImg" />
                    <div className="rbgrName"> {AuthName} </div>
                </div>

            </div>
        </>
    )
}

export default UserDashboard;
