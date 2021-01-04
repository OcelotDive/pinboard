import React, { useState, useRef } from 'react';
import Button from './components/AddButton';
import Portal from './components/Portal';
import NoteStack from './components/NoteStack';
import './App.css';

import Container from './components/Container';

function App() {


  let [id, setId] = useState('yellow');
  let [notes, setNotes] = useState([]);
 
  const addNote = () => {
    if(notes.length < 18) { 
    setNotes([...notes, Math.floor(Math.random() * 1000000 + (notes.length * Math.floor(Math.random() * 1000.5)))]);
    
   
     if(notes.length === 0 || notes.length === 4 || notes.length === 8 || notes.length === 12 || notes.length === 16) {
      setId('purple');
    }
    else if (notes.length === 2 || notes.length === 6 || notes.length === 10 || notes.length === 14) {
      setId('blue')
    }
    else {
      setId('yellow');
    }


    }
    else {
      alert("Pin board full remove some notes first.")
      console.log(notes.length)
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
        if(notes.length === 18 || notes.length === 14 || notes.length === 10 || notes.length === 6 || notes.length === 2) {
          setId('purple');
        }
        else if (notes.length === 16 || notes.length === 12 || notes.length === 8 || notes.length === 4) {
          setId('blue')
        }
        else {
          setId('yellow');
        }
        console.log(notes)
   
      }, 1000);
      
  }

  const textAdded = (index,e) => {
    let newNotes = notes.slice(0);
    newNotes[index] = e.target.value;
    setNotes(newNotes);
    console.log(e.target.value);  
  }

  const test = () => {
    console.log("this is a test method")

  const mastMeth = () => {
    console.log("added later");
  return (
    <div className="App">
     
      <Container notes={notes} removeNote={removeNote} textAdded={textAdded} addNote={addNote}>
      </Container>
      {/*(<Button addNote={addNote}/>*/}
      <NoteStack id={id}/>
  
    </div>
  );
}

export default App;
