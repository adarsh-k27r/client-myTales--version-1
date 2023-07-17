import React from 'react'
import LandingPage from "./LandingPage";
import AskMail from "./AskMail";
import BlogFeed from "./BlogFeed";
import Pitch from "./Pitch";
import Footer from "./Footer";
import "../stylesheets/Home.css";



function Home() {
  return (
    <>
    
        <LandingPage />
        <AskMail />
        <BlogFeed />
        <div className="parallax"></div>
        <Pitch />
        <Footer />
      

    </>
  )
}

export default Home;
