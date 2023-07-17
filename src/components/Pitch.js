import React from 'react'
import "../stylesheets/styles.css";
import "../stylesheets/Pitch.css";
import {Link} from "react-router-dom";

function Pitch() {
    return (
        <>
            <section className="next3">

                <div className="bk">
                    <p className="vd">Create space for your thinking to take off.</p>
                    <p className="vc">Every thought has emotion & Every emotion is backed by words. <br/>
                        Word is eternal, indestructible & endlessly propagative !
                        Share it with the world and unleash the power of expression.
                    </p>
                    
                    {!localStorage.getItem('token') ? <Link to='/login'>Write on myTales</Link> :
                    <Link to='/write'>Write on myTales</Link> }
                      

                </div>

            </section>
        </>
    )
}

export default Pitch;
