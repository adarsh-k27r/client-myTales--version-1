import React, { useContext, useEffect } from "react";
import BlogContext from "../context/blog/BlogContext";
import "../stylesheets/styles.css";
import "../stylesheets/BlogFeed.css";
import { useNavigate } from "react-router-dom";
import BlogCard from './BlogCard';


function BlogFeed() {

    const context = useContext(BlogContext);
    const { masterNotes, getMasterNote } = context;

    useEffect(() => {
        getMasterNote();

    }, []);

    const navigate = useNavigate();
    const handler = () => {
        navigate('/read');
    }

    return (
        <>
            <section className="blogFeed">

                <div className="cardHeading">
                    Top stories
                </div>

                {masterNotes.length === 0 && 'No notes to display.'}
                {masterNotes.map((note) => {
                    return <BlogCard key={note._id} note={note} />
                })}

                <div className="fade">
                    <button onClick={handler} className="sbtn">Read more</button>
                </div>


            </section>
        </>
    )
}

export default BlogFeed;
