export function getNotes(req, res) {
    res.send("Get all notes");
}

export function createNote(req, res) {
    res.send("Create a new note");
}

export function updateNote(req, res) {
    res.send(`Update note with Name ${req.params.name}`);
}

export function deleteNote(req, res) {
    res.send(`Delete note with Name ${req.params.name}`);
}