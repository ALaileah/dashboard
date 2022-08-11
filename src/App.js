import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./componentes/NotesList";
import Search from "./componentes/Search";
import Header from "./componentes/Header";

const App = () =>{
    const [notes,setNotes]=useState([{   id:nanoid(), 
        text:"This is my fisrt note!",
        date:"15/04/2021",
    },
    {   id:nanoid(), 
        text:"This is my second note!",
        date:"16/04/2021",
    },
    {   id:nanoid(), 
        text:"This is my third note!",
        date:"15/04/2021"
    },
    {   id:nanoid(), 
        text:"This is my fourth note!",
        date:"17/04/2021"
    }
]);
const [searchText,setSearchText]= useState('');
const [darkMode,setDarkMode]= useState(false)
const addNote = (text) =>{
    const date= new Date();
    const newNote={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString(),
    };
    const newNotes=[...notes,newNote];
    setNotes(newNotes);

}
const deleteNote = (id) =>{
    const newNotes=notes.filter((note)=>note.id!==id)
    setNotes(newNotes)

}
    return (
   <div className={`${darkMode && 'dark-mode'}`}>
     <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes)} handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>

     </div>
    </div>
    )
};
export default App;