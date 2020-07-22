import React, { useState } from 'react';
import Button from './components/AddButton';
import Portal from './components/Portal';
import './App.css';

import Container from './components/Container';

function App() {

  let [notes, setNotes] = useState([]);

  const addNote = () => {
    if(notes.length < 18) { 
    setNotes([...notes, ""]);
    }
    else {
      alert("Pin board full remove some notes first.")
    }

  }

      const removeNote = (index, e) => {
        /*let textValue = e.target.nextSibling.value.toString();
        console.log(notes)
        console.log(notes[index].length, textValue.length)
       setNotes(notes.filter((e) => (e !== textValue)))*/
       setNotes(notes.filter((item, ind, arr) => {
         return ind !==2;
       }))
        
  }

  const textAdded = (index,e) => {
    let newNotes = notes.slice(0);
    newNotes[index] = e.target.value;
    setNotes(newNotes);
   

    
  }

  return (
    <div className="App">
      <Container notes={notes} removeNote={removeNote} textAdded={textAdded}>
        
      </Container>
      <Button addNote={addNote}/>
      
    </div>
  );
}

export default App;
