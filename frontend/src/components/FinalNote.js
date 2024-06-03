import React, { useEffect } from 'react';
import useNotesStore from "../stores/notesStores";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";
//import '../style/note.css';

function FinalNote() {
  const fetchNotes = useNotesStore((store) => store.fetchNotes);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div className="App">
      <Notes />
      <UpdateForm />
      <CreateForm />
    </div>
  );
}

export default FinalNote;
