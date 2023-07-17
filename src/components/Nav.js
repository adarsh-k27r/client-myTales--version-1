import React, { useContext } from 'react'
import "../stylesheets/styles.css";
import "../stylesheets/Nav.css";
import logoUrl from "../images/logo.png";
import AuthContext from '../context/auth/AuthContext';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Nav() {

    const context = useContext(AuthContext);
    const { logout, isAuthenticated } = context;

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();

        if (!isAuthenticated || !localStorage.getItem('token')) {
            navigate('/');
        }
    }

    const handler = () => {
        navigate('/');
    }


    // Define the routes where you want to show the navbar
    const navRoutes = ['/', '/read', '/write', '/profile', '/privacy', '/terms', '/about', '/contact'];

    // Check if the current location matches any of the navRoutes
    const showNavbar = navRoutes.includes(location.pathname);

    // Render the navbar conditionally
    if (!showNavbar) {
        return null;
    }



    return (

        <>

            <nav className="navBar">

                <div className="navList">


                    <div className="slideLeft">

                        <div className="brandLogo"><img src={logoUrl} className="logo" alt="logo" onClick={handler} /></div>

                        <form className="search">
                            <input className="btn" type="text" name="search" placeholder="Search" autoComplete="off" />
                            <button className="btn ip" type="submit"><i className="fa-solid fa-magnifying-glass fa-xl clr" /></button>
                        </form>
                    </div>



                    <ul className="tabLinks">
                        {
                            !localStorage.getItem('token') ? <li><NavLink to='/'>Home</NavLink></li>
                                : <li><NavLink to='/write'>Publish</NavLink></li>
                        }

                        <li><NavLink to='/read'>Read</NavLink></li>


                        {
                            !localStorage.getItem('token') ? null
                                : <li><NavLink to='/profile'>Profile</NavLink></li>
                        }



                    </ul>

                    {!localStorage.getItem('token') ? <ul className="signinLink">
                        <li><Link to='/login' className="ibtn">Sign
                            In&nbsp;&nbsp;<i className="fa-solid fa-circle-user fa-xl" /></Link></li>
                    </ul> :
                        <ul className="signinLink">
                            <li><button onClick={handleLogout} className="ibtn">Logout</button></li>
                        </ul>}

                </div>

            </nav>


        </>

    )

}

export default Nav;
