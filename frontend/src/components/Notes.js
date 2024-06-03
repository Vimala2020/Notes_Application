import React, { useState, useEffect } from 'react';
import useStore from "../stores/notesStores"; 
import Note from "./Note";
import "../styles/notes.css";

export default function Notes() {
  const notes = useStore((state) => state.notes); 
  const fetchNotes = useStore((state) => state.fetchNotes); 

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchNotes();
      setLoading(false);
    };
    fetchData();
  }, [fetchNotes]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="notes-container">
      <h2>Notes:</h2>
      {notes && notes.map((note) => (
        <Note note={note} key={note._id} /> // Pass note as prop
      ))}
    </div>
  );
}



