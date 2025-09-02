import Note from "../models/Note.js";

export async function getNotes(req, res){
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch(error){
        console.error("Error fetching notes:", error);
        res.status(500).json({"message": "Server error"});
    }
}

export async function createNote(req, res){
    try{
        const {title, content} = req.body
        const newNote = new Note({title, content})
        await newNote.save()
        res.status(201).json({"message": "Note created", note: newNote})
    }
    catch(error){
        console.error("Error creating note:", error);
        res.status(500).json({"message": "Server error"});
    }
}

export async function updateNote(req, res){
    try{
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {title, content},
            {
            new: true,
        }
        );
        if(!updatedNote) return res.status(404).json({"message": "Note not found"})
        res.status(200).json({"message": "Note updated", note: Note})
    }
    catch(error){
        console.error("Error updating note:", error);
        res.status(500).json({"message": "Server error"});
    }
}

export async function deleteNote(req, res){
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({"message": "Note not found"})
        res.status(200).json({"message": "Note Deleted", note: Note})
    }
    catch(error){
        console.error("Error Deleting note:", error);
        res.status(500).json({"message": "Server error"});
    }}
