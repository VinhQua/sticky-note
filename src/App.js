import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import { useEffect, useState } from 'react';
import NotesList from './NotesList';
import userEvent from '@testing-library/user-event';

function App() {
  const [noteData,setNote] = useState(()=>{
    return JSON.parse(localStorage.getItem('noteData')) ||
    {
    inputValue:"",
    notes:[{
      id:1,
      title:"",
      description:""
    },
    {
      id:2,
      title:"",
      description:""
    },
    {
      id:3,
      title:"",
      description:""
    }]
  }});
  useEffect(()=>{
    localStorage.setItem('noteData',JSON.stringify(noteData))
  },[noteData])
  const addNote=()=>{
    const newNote ={id:Date.now(),
      title:"",
      description:""};
    const notesArr = [...noteData.notes,newNote]
    setNote(curNoteData=>({...curNoteData,notes:notesArr}))
  };
  const updataNote=(id,type,value)=>{
    const notesArr = noteData.notes.map(note=>{
      if (note.id === id){
        note[type]=value;
        
      }
      return note
    });
    console.log(notesArr)
    setNote(curNoteData=>({...curNoteData,notes:notesArr}))
  }
  const deleteNote=(id)=>{
    const notesArr = noteData.notes.filter(note=> note.id!== id);
    setNote(curNoteData=>({...curNoteData,notes:notesArr}))
  }
  const updateFilter=(value)=>{
    setNote(curNoteData=>({...curNoteData,inputValue:value}))
  }
  return (
    <div className="App">
      <UserInput updateFilter={updateFilter} addNote={addNote}/>
      <NotesList deleteNote={deleteNote} updateNote={updataNote} inputValue={noteData.inputValue} notes={noteData.notes}/>
    </div>
  );
}

export default App;
