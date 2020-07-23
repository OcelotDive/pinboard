import React, { useState } from 'react';
import Button from './components/AddButton';
import Portal from './components/Portal';
import NoteStack from './components/NoteStack';
import './App.css';

import Container from './components/Container';

function App() {

  let [notes, setNotes] = useState([]);
 
  const addNote = () => {
    if(notes.length < 18) { 
    setNotes([...notes, Math.floor(Math.random() * 1000000 + (notes.length * Math.floor(Math.random() * 1000.5)))]);
    }
    else {
      alert("Pin board full remove some notes first.")
    }

  }

    const removeNote = (name, ref) => {
      ref.current.id = "noteUnpin";
      console.warn(ref.current);
      //Give animation time to finish
        setTimeout(() => {
          setNotes(notes.filter((note) => {
          return note !== name;
        } ))
      }, 1000)
  }

  const textAdded = (index,e) => {
    let newNotes = notes.slice(0);
    newNotes[index] = e.target.value;
    setNotes(newNotes);
    console.log(e.target.value);  
  }



  return (
    <div className="App">
      <Container notes={notes} removeNote={removeNote} textAdded={textAdded} addNote={addNote}>
        
      </Container>
      {/*(<Button addNote={addNote}/>*/}
      <NoteStack />
    </div>
  );
}

export default App;
