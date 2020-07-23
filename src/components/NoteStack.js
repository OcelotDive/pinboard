import React from 'react';

const NoteStack = () => {
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