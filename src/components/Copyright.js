import React from 'react'
import "../stylesheets/styles.css";
import "../stylesheets/Copyright.css";
var moment = require('moment');

function Copyright() {

    var formatted_year = moment().format('YYYY');

    return (
        <>
            <footer>
                <p>Copyright &copy; {formatted_year}- All rights reserved.</p>
            </footer>
        </>
    )
}

export default Copyright;
