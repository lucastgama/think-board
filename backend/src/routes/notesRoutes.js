import express from 'express';
import { createNote, deleteNote, getNotes, updateNote } from '../controllers/notesController.js';

const routes = express.Router();

routes.get("/", getNotes);

routes.post("/", createNote);

routes.put("/:id", updateNote);

routes.delete("/:id", deleteNote);

export default routes;
