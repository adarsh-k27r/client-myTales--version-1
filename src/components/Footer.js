import React from 'react'
import "../stylesheets/styles.css";
import "../stylesheets/Footer.css";
import logoUrl from "../images/logo.png";
import Copyright from "./Copyright";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <section className="sm-i">

                <div className="siteMap">
                    <h3>Sitemap</h3>
                    <ul className="site-l">
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                        <li><Link to='/terms'>Terms of Services</Link></li>
                        <li><Link to='/privacy'>Privacy Policy</Link></li>
                    </ul>
                </div>


                <div className="ism">
                    <span>Follow us</span>

                    <div className="lt">
                        <Link to='https://www.linkedin.com/in/adarsh-k27r/'><i className="fa-brands fa-linkedin fa-xl blue mar" /></Link>
                        <Link to='https://www.instagram.com/_arshsingh_27/'><i className="fa-brands fa-instagram fa-xl red mar" /></Link>
                        <Link to='https://www.facebook.com/adarshkr.singh.395?mibextid=ZbWKwL'><i className="fa-brands fa-facebook fa-xl blue mar" /></Link>
                        <Link to='https://twitter.com/adarsh_k27r'><i className="fa-brands fa-twitter fa-xl blue mar" /></Link>

                    </div>
                </div>


                <div className="f-l">
                    <img src={logoUrl} className="logo-f" alt="logo" />

                    <span><i className="fa-solid fa-envelope" /> &nbsp;
                        adarshkr010122@gmail.com
                        <hr className="line" />
                    </span>

                    <span><i className="fa-solid fa-phone" /> &nbsp;
                        +91-7903737429
                    </span>
                </div>



            </section>

            <Copyright />
        </>
    )
}

export default Footer;
