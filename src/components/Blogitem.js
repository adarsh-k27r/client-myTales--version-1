import React, { useContext, useEffect } from "react";
import BlogContext from "../context/blog/BlogContext";
import BarCard from "./BarCard";

function Blogitem() {
  
  const context = useContext(BlogContext);
  const { notes, getNote } = context;
  useEffect(() => {
    getNote();

  }, []);
  return (
    <>
      {notes.length === 0 && 'No notes to display.'}
      {notes.map((note) => {
        return <BarCard key={note._id} note={note} />
      })}
    </>
  )
}

export default Blogitem;
