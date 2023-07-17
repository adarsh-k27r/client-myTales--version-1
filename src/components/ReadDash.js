import React, { useLayoutEffect } from 'react';
import LeftPanelReadDash from './LeftPanelReadDash';
import "../stylesheets/read.css";

function ReadDash() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      });

      
    return (
        <>
            <div className="r_division">

                <LeftPanelReadDash />

            </div>
        </>
    )
}

export default ReadDash;
