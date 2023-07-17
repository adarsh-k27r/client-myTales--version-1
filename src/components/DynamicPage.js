import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams  } from "react-router-dom";
import BlogContext from "../context/blog/BlogContext";
import "../stylesheets/DynamicPage.css"
var moment = require('moment');



function DynamicPage() {

    const navigate = useNavigate();

    const context = useContext(BlogContext);
    const { SingleNotes, singleNote } = context;

    const [searchParams] = useSearchParams();
    const ID = searchParams.get("id");

    useEffect(() => {
        singleNote(ID);
    
      }, []);

    var formatted_date = moment(SingleNotes.date).format('MMM D, YYYY');

    const WordCount = (str) => {
        
        const len = str?.split(" ").length;  // optional chaining
        const time = Math.floor(len / 200);
        if (time == 0) {
            return "few sec";
        }
        return time + " min";
    }

    const back = ()=>{
        navigate(-1);
    }

    return (
        <>
            <button className="dy-btn" onClick={back}>Go Back</button>
            <h1 className="dyh1"> {SingleNotes.title} </h1>
            <div className="meta-info">
                <span><b>from- </b> <strong>{SingleNotes.author}</strong> </span>
                <span>{WordCount(SingleNotes.body)} read</span>
                <span>{formatted_date}</span>
            </div>
            <div className="para-d">
                <p>{SingleNotes.body}</p>
            </div>
        </>
    )
}

export default DynamicPage;
