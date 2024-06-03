import React, { useState } from "react";
import useNotesStore from "../stores/notesStores";
//import '../style/modal.css';

export default function CreateForm() {
  const { createNote, updateCreateFormField, createForm } = useNotesStore();
  const [showModal, setShowModal] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    createNote();
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Create Note</button>
      {showModal && (
        <>
          <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal">
            <h2>Create Note</h2>
            <form onSubmit={handleCreate}>
              <input
                onChange={(e) => updateCreateFormField("title", e.target.value)}
                value={createForm.title}
                name="title"
                placeholder="Title"
              />
              <textarea
                onChange={(e) => updateCreateFormField("body", e.target.value)}
                value={createForm.body}
                name="body"
                placeholder="Description"
              />
              <button type="submit">Create Note</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
