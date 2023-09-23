import React, { useState } from "react";
import BlogContext from "./BlogContext";


const BlogState = (props) => {
  const host = "https://backend-my-tales.vercel.app";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const publicNotes = [];
  const [pubNotes, setPubNotes] = useState(publicNotes);

  const masternotes = [];
  const [masterNotes, setMasterNotes] = useState(masternotes);

  const [SingleNotes, setSingleNotes] = useState("");


  // Get all account Notes
  const getNote = async () => {
    const response = await fetch(`${host}/api/blog/fetchallstories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });

    const json = await response.json();
    setNotes(json);

  }

  // Get all public Notes

  const getPublicNote = async () => {
    const response = await fetch(`${host}/api/blog/pubstories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await response.json();
    setPubNotes(json);

  }

  // Get master Notes

  const getMasterNote = async () => {
    const response = await fetch(`${host}/api/blog/masterstories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await response.json();
    setMasterNotes(json);

  }

  // Get one single note using dynamic route.

  const singleNote = async (id) => {

    const response = await fetch(`${host}/api/blog/stories/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    setSingleNotes(json);

    
  }



  // Add a Note
  const addNote = async (title, body) => {
    const response = await fetch(`${host}/api/blog/addstory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, body }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
    

  }

  // Delete a Note
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/blog/deletestory/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json();

    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }


      // Value to be provided to consumers of BlogContext
      const blogContextValue = {
        notes,
        pubNotes,
        addNote, 
        deleteNote, 
        getNote, 
        getPublicNote, 
        getMasterNote,
        masterNotes,
        singleNote,
        SingleNotes,
        
    };


  return (
    <BlogContext.Provider value={blogContextValue}>
      {props.children}
    </BlogContext.Provider>
  );

}

export default BlogState;

