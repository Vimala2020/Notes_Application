import React, { useState } from 'react';
import useStore from "../stores/notesStores";
import '../styles/note.css' 


export default function Note({ note }) {
  const [showDescription, setShowDescription] = useState(false);
  const deleteNote = useStore((store) => store.deleteNote);
  const toggleUpdate = useStore((store) => store.toggleUpdate);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note._id);
    }
  };

  return (
    <div key={note._id} className="note-item">
      <h3>{note.title}</h3> {/* Ensure the title is displayed */}
      <button
        className={showDescription ? "hide-description-btn" : "show-description-btn"}
        onClick={handleToggleDescription}
      >
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      {showDescription && <p>{note.body}</p>}
      <button className="button button-danger" onClick={handleDelete}>Delete</button>
      <button className="button" onClick={() => toggleUpdate(note)}>Update</button>
    </div>
  );
}