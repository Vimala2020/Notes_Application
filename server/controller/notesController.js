const Note = require("../models/note");

const fetchNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json({ notes });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
}

const fetchNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const note = await Note.findById(noteId);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.json({ note });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch note' });
    }
}

const createNotes = async (req, res) => {
    try {
        const { title, body } = req.body;
        const note = await Note.create({ title, body });
        res.status(201).json({ note });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create note' });
    }
}

const updateNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const { title, body } = req.body;
        await Note.findByIdAndUpdate(noteId, { title, body });
        const updatedNote = await Note.findById(noteId);
        if (!updatedNote) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.json({ note: updatedNote });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update note' });
    }
}

const deleteNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const result = await Note.deleteOne({ _id: noteId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.json({ success: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
}

module.exports = {
    fetchNotes,
    fetchNote,
    createNotes,
    updateNote,
    deleteNote
};
