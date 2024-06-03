import React from "react";
import useNotesStore from "../stores/notesStores";
//import '../style/modal.css';

export default function UpdateForm() {
  const { updateForm, handleUpdateFieldChange, updateNote, toggleUpdate } = useNotesStore();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateNote();
  };

  if (!updateForm._id) return null;

  return (
    <>
      <div className="modal-overlay" onClick={() => toggleUpdate({ _id: null, title: "", body: "" })}></div>
      <div className="modal">
        <h2>Update Note</h2>
        <form onSubmit={handleUpdate}>
          <input
            onChange={(e) => handleUpdateFieldChange("title", e.target.value)}
            value={updateForm.title}
            name="title"
            placeholder="Title"
          />
          <textarea
            onChange={(e) => handleUpdateFieldChange("body", e.target.value)}
            value={updateForm.body}
            name="body"
            placeholder="Description"
          />
          <button type="submit">Update Note</button>
        </form>
      </div>
    </>
  );
}
