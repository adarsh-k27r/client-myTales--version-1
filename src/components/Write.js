import React, { useContext, useState } from "react";
import "../stylesheets/write.css";
import BlogContext from "../context/blog/BlogContext";


function Write() {
    const context = useContext(BlogContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", body: "" });
    const handler = (e) => {
        e.preventDefault();
        addNote(note.title, note.body);
        setNote({ title: "", body: "" });

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });

    }

    return (
        <>

            <section className="w-r">
                <form onSubmit={handler}>
                    <label htmlFor="title">Title</label><br />
                    <input required type="text" id="title" name="title" autoComplete="off" onChange={onChange} minLength={5} value={note.title} /><br />
                    <label htmlFor="blog">Blog</label><br />
                    <textarea required name="body" id="blog" cols="60" rows="10" placeholder="Tell your stories..." onChange={onChange} minLength={5} value={note.body} /><br />
                    <button disabled={note.title.length < 5 || note.body.length < 40} type="submit" id="submit">Publish</button>
                </form>
            </section>
        </>
    )
}

export default Write;
