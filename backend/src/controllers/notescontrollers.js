export function getNotes(req, res){
    res.status(200).send("You've Got 20 notes!");
}

export function createNote(req, res){
    res.status(201).send("Note created");
}

export function updateNote(req, res){
    res.status(200).send("Note updated");
}

export function deleteNote(req, res){
    res.status(204).send("Note deleted");
}