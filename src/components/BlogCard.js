import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/styles.css";
import "../stylesheets/BlogCard.css";
import avatar from "../images/blog_avatar.svg";
var moment = require('moment');


function BlogCard(props) {

    const navigate = useNavigate();

    const { note } = props;
    var formatted_date = moment(note.date).format('MMM D, YYYY');

    const WordCount = (str) => {
        const len = str.split(" ").length;
        const time = Math.floor(len / 200);
        if (time == 0) {
            return "few sec";
        }
        return time + " min";
    }

    const handler2 = () => {
        navigate({
            pathname: "/story",
            search: `?id=${note._id}`, // inject id value into template
        });
    }

    return (
        <>

            <div className="blogCard">

                <hr className="line" />

                <div className="upperSec">

                    <img src={avatar} alt="avatar" className="avatar" />
                    <p className="authName">{note.author}</p>
                    <span className="dot">.</span>
                    <p className="date"> {formatted_date} </p>

                </div>

                <div className="downSec">

                    <div className="middleSec" onClick={handler2}>
                        <h1 className="blogHeading">{note.title.substr(0, 20) + ".."}</h1>
                        <p className="blogCaption">{note.body.substr(0, 40) + "..."}</p>


                        <div className="footSec">

                            <p className="minRead">
                                {WordCount(note.body)} read
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default BlogCard;
