import React from 'react'
import "../stylesheets/read.css";
import BlogPubItem from './BlogPubItem';


function LeftPanelReadDash() {
    return (
        <>
            <div className="leftDivi blogFeed-re">

                <h3>Top picks</h3>

                <BlogPubItem />

            </div>
        </>
    )
}

export default LeftPanelReadDash;
