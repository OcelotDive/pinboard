import React from 'react';

const NoteStack = ({id}) => {

    return(
        <div className="noteStack">
            <div className="topNote" draggable="true" id={id}></div>
            <label>Drag to board.</label>
            <p></p>
            <br/>
        </div>
    )
}


export default NoteStack;