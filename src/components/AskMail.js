import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../stylesheets/styles.css";
import "../stylesheets/AskMail.css";


function AskMail() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iwadkth', 'template_etzlgir', form.current, 'khfdILNKz30pVktqR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById("myForm").reset();

    };



    return (
        <>
            <div className="askMail">

                <div className="askMail-heading">Subscribe to our Newsletter</div>
                <form ref={form} onSubmit={sendEmail} id='myForm' >
                    <input type="text" name="user_email" placeholder="Email" autoComplete="off" required />
                    <button type="submit" className="sbtn sbtn-posn"> Subscribe </button>
                </form>

            </div>
        </>
    )
}

export default AskMail;
