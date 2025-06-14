import Note from "../models/Note.js";

export async function getNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error retrieving notes:", error);
        res.status(500).send("Error retrieving notes");
    }
}

export async function createNote(req, res) {
    console.log("Creating a new note with body:", req.body);
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).send("Title and content are required");
        }

        const newNote = new Note({
            title,
            content,
        });

        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).send("Error creating note");
    }
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        if (!title && !content) {
            return res.status(400).send("Title and content are required");
        }
        const updatedAt = new Date();

        const updatedNote = await Note.findByIdAndUpdate(id, { title, content, updatedAt }, { new: true });

        if (!updatedNote) {
            return res.status(404).send("Note not found");
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).send("Error updating note");
    }
}

export async function deleteNote(req, res) {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).send("Note not found");
        }

        res.status(204).send();
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).send("Error deleting note");
    }
}

export const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).send("Note not found");
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error retrieving note:", error);
        res.status(500).send("Error retrieving note");
    }
};