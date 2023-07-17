import React from 'react'
import error404 from  "../images/yellow 404.svg";
import "../stylesheets/error.css";
import { useNavigate } from "react-router-dom";

function Error() {

  const navigate = useNavigate();

  const goHome = ()=>{
    navigate('/');
  }


  return (
    <>
      <div className='center'>
        <img className="error404" src={error404} alt="Error 404: Page Not Found!"/>
        <button onClick={goHome} className='btn-err'>Go Back</button>
      </div>
    </>
  )
}

export default Error;
