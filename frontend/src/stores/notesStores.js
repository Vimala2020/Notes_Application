import { create } from "zustand";
import axios from "axios";

const useNotesStore = create((set) => ({
  notes: [],
  createForm: {
    title: "",
    body: "",
  },
  updateForm: {
    _id: null,
    title: "",
    body: "",
  },
  fetchNotes: async () => {
    try {
      const res = await axios.get("http://localhost:3000/notes");
      set({ notes: res.data.notes });
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  },
  updateCreateFormField: (name, value) => {
    set((state) => ({
      createForm: {
        ...state.createForm,
        [name]: value,
      },
    }));
  },
  createNote: async () => {
    try {
      const { createForm } = useNotesStore.getState();
      const res = await axios.post("http://localhost:3000/notes", createForm);
      set((state) => ({
        notes: [...state.notes, res.data.note],
        createForm: {
          title: "",
          body: "",
        },
      }));
    } catch (error) {
      console.error("Error creating note:", error);
    }
  },
  deleteNote: async (_id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${_id}`);
      set((state) => ({
        notes: state.notes.filter((note) => note._id !== _id),
      }));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  },
  handleUpdateFieldChange: (name, value) => {
    set((state) => ({
      updateForm: {
        ...state.updateForm,
        [name]: value,
      },
    }));
  },
  toggleUpdate: ({ _id, title, body }) => {
    set((state) => ({
      updateForm: {
        title,
        body,
        _id,
      },
    }));
  },
  updateNote: async () => {
    try {
      const { updateForm } = useNotesStore.getState();
      const res = await axios.put(`http://localhost:3000/notes/${updateForm._id}`, {
        title: updateForm.title,
        body: updateForm.body,
      });
      set((state) => ({
        notes: state.notes.map((note) =>
          note._id === updateForm._id ? res.data.note : note
        ),
        updateForm: {
          _id: null,
          title: "",
          body: "",
        },
      }));
    } catch (error) {
      console.error("Error updating note:", error);
    }
  },
}));

export default useNotesStore;
