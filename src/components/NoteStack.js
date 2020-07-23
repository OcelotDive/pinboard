import React from 'react';
import styled from 'styled-components';


const NoteStack = () => {

 

    const dragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
    }
 
    
    return(
        <div className="noteStack">
            <div className="topNote" draggable="true"></div>
            <label>Drag to board.</label>
            <p></p>
            <br/>
        </div>
    )
}


export default NoteStack;