import React, { useContext, useEffect } from "react";
import BlogContext from "../context/blog/BlogContext";
import BlogCard from "./BlogCard";

function BlogPubItem() {

    const context = useContext(BlogContext);
    const { pubNotes, getPublicNote } = context;
    useEffect(() => {
      getPublicNote();
  
    }, []);

  return (
    <>
      {pubNotes.length === 0 && 'No Notes to display.'}
      {pubNotes.map((note) => {
        return <BlogCard key={note._id} note={note} />
      })}
      
    </>
  )
}

export default BlogPubItem;
