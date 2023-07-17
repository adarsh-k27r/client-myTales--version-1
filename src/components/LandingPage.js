import React from 'react'
import "../stylesheets/styles.css";
import "../stylesheets/LandingPage.css";
import { Link } from "react-router-dom";


function LandingPage() {
    return (
        <>
            <section className="landingPage">


                <div className="left">

                    <p className="bold">Manifesting ideas into reality.</p>
                    <p className="semi-bold">And Every Reality was once an story.
                        <br />What's Yours ?
                    </p>


                    <div>
                        {!localStorage.getItem('token') ? <Link to='/signup' className="exp">Start
                            Exploring&nbsp;&nbsp; </Link> :
                            <Link to='/read' className="exp">Start
                                Exploring&nbsp;&nbsp; </Link>}

                    </div>

                </div>


                <div className="right background">

                </div>


            </section>

        </>
    )
}

export default LandingPage;
