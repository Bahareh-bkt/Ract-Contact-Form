import NotesList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';
/*import AddNote from "./components/AddNote";*/

const App = () =>{
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "Das ist mein erstes Note!",
            date: "27.05.2022"
        },
        {
            id: nanoid(),
            text: "Hallo ",
            date: "21.05.2022"
        },
        {
            id: nanoid(),
            text: " Welt",
            date: "22.05.2022"
        },
        {
            id: nanoid(),
            text: "Hallo-Welt",
            date: "23.05.2022"
        },
        {
            id: nanoid(),
            text: "Hallo,Welt",
            date: "24.05.2022"
        },
        {
            id: nanoid(),
            text: "Hallo Welt",
            date: "26.05.2022"
        },
    ]);

    const addNote = (text) =>{
        const date = new Date()
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
    
    const newNotes= [...notes, newNote]
    setNotes(newNotes)
    }
    const deleteNote= (id) =>{
       const newNotes = notes.filter((note)=> note.id !== id)
       setNotes(newNotes)
    }


return (
    <div className="container">
        <NotesList notes={notes}
        handleAddNote={addNote}
        handleDeleteNote = {deleteNote}
        />
    </div>
    )
}

export default App;