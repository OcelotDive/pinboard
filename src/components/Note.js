import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';





const fadeAnim = keyframes`
    from {opacity: 0; transform: rotate(10deg);};
    to {opacity: 1}
`

const StyledNote = styled.a`
animation: ${fadeAnim} .5s linear;
background: #CAC531;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F3F9A7, #CAC531);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F3F9A7, #CAC531); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
border: 1px solid rgba(0,0,0,.25);
box-shadow: 0 6px 9px rgba(0,0,0,.25);
-webkit-box-shadow: 0 6px 9px rgba(0,0,0);
-moz-box-shadow: 0 6px 9px rgba(0,0,0);
float: left;
height: 22%;
margin: 8px;
width: 14%;
z-index: 3;
transform: rotate(-3.5deg);
-webkit-transform: rotate(-3.5deg);
-moz-transform: rotate(-3.5deg);

&:nth-of-type(2n + 0) {
background: #f4c4f3;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #fc67fa, #f4c4f3);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #fc67fa, #f4c4f3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

&:nth-of-type(4n + 2) {
transform: rotate(3.5deg);
-webkit-transform: rotate(3.5deg);
-moz-transform: rotate(3.5deg);
}

&:nth-of-type(3n + 7) {
transform: rotate(-1.5deg);
-webkit-transform: rotate(-1.5deg);
-moz-transform: rotate(-1.5deg);
}

&:nth-of-type(3n + 3) .pin{
background-image: -moz-radial-gradient(45px 45px 45deg, circle cover, green 50%, black 100%);
background-image: -webkit-radial-gradient(45px 45px, circle cover, green, black);
background-image: radial-gradient(green 50%, black 100%);
}

&:nth-of-type(4n + 7) .pin{
background-image: -moz-radial-gradient(45px 45px 45deg, circle cover, blue 50%, black 100%);
background-image: -webkit-radial-gradient(45px 45px, circle cover, blue, black);
background-image: radial-gradient(blue 50%, black 100%);
    }

&:nth-of-type(4n + 0) {
background: #acb6e5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #86fde8, #acb6e5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #86fde8, #acb6e5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
`;

const StyledPin = styled.div`
background-image: -moz-radial-gradient(45px 45px 45deg, circle cover, yellow 50%, black 100%);
background-image: -webkit-radial-gradient(45px 45px, circle cover, yellow, black);
background-image: radial-gradient(yellow 50%, black 100%);
border-radius: 50%;
height: 12%;
margin-left: calc(50% - 6%);
margin-top: 5%;
width: 12%;
z-index: 9999;

&:hover {
    cursor: grab;
}
`;


const StyledText = styled.textarea`
align-items: center;
background-color: inherit;
border: none;
font-family: 'The Girl Next Door', cursive;
font-size: .8vw;
font-weight: bold;
display: flex;
height: calc(100% - (22px + 5%));
justify-content: center;
outline: none;
overflow: hidden;
padding: 0 3%;
position: absolute;
resize: none;
width: 91%;
`;



const Note = ({removeNote, textAdded, index, name}) => {
  
    const noteRef = useRef();
    return (
        <StyledNote ref={noteRef}>
            <StyledPin className="pin" onClick={(e) => removeNote(name, noteRef)}></StyledPin>
            <StyledText onChange={(e) =>textAdded(index, e)}></StyledText>
        </StyledNote>
    )
}

export default Note;