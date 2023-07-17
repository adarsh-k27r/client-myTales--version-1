import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BlogContext from "../context/blog/BlogContext";
import "../stylesheets/styles.css";
import "../stylesheets/BarCard.css";
var moment = require('moment');


function BarCard(props) {

    const navigate = useNavigate();

    const context = useContext(BlogContext);
    const { deleteNote } = context;

    const { note } = props;
    var formatted_date = moment(note.date).format('D');
    var formatted_month = moment(note.date).format('MMM');

    const WordCount = (str) => {
        const len = str.split(" ").length;
        const time = Math.floor(len / 200);
        if (time == 0) {
            return "few sec";
        }
        return time + " min";
    }

    const handler = () => {
        navigate({
            pathname: "/story",
            search: `?id=${note._id}`, // inject id value into template
        });
    }

    return (
        <>
            <div className="bar-v">
                <div className="tym-v">
                    <p className="month-v">
                        {formatted_month}
                    </p>
                    <hr className="hr-d-v" />
                    <p className="date-v">
                        {formatted_date}
                    </p>
                </div>

                <div className="category-v">
                    <p className="topic-v margin-b-v" onClick={handler}>
                        {note.title.substr(0, 20) + ".."}
                    </p>
                    <p className="bContent-v margin-b-v" onClick={handler}>
                        {note.body.substr(0, 40) + "..."}
                    </p>

                    <span className="minRead-v margin-b-v">
                        {WordCount(note.body)} read
                    </span>

                    <i className="fa-regular fa-trash-can mari" onClick={() => { deleteNote(note._id) }} />

                </div>

            </div>
        </>
    )
}

export default BarCard;
