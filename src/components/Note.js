import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';





const fadeAnim = keyframes`
    from {opacity: 0; transform: rotate(10deg);};
    to {opacity: 1}
`

const StyledNote = styled.a`
width: 14%;
height: 22%;
box-shadow: 0 6px 9px rgba(0,0,0,.25);
-webkit-box-shadow: 0 6px 9px rgba(0,0,0);
-moz-box-shadow: 0 6px 9px rgba(0,0,0);
float: left;
margin: 8px;
border: 1px solid rgba(0,0,0,.25);
z-index: 3;
transform: rotate(-3.5deg);
-webkit-transform: rotate(-3.5deg);
-moz-transform: rotate(-3.5deg);
background: #CAC531;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F3F9A7, #CAC531);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F3F9A7, #CAC531); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

animation: ${fadeAnim} .5s linear;



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

width: 12%;
height: 12%;
border-radius: 50%;
background-image: -moz-radial-gradient(45px 45px 45deg, circle cover, yellow 50%, black 100%);
background-image: -webkit-radial-gradient(45px 45px, circle cover, yellow, black);
background-image: radial-gradient(yellow 50%, black 100%);
z-index: 9999;
margin-top: 5%;
margin-left: calc(50% - 6%);
`;


const StyledText = styled.textarea`
position: absolute;
width: 100%;
font-family: 'The Girl Next Door', cursive;
height: calc(100% - (22px + 5%));
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
font-size: .8vw;
background-color: inherit;
border: none;
resize: none;
outline: none
`;



const Note = ({removeNote, textAdded, index, name}) => {
  
    const noteRef = useRef();
    return (
        <StyledNote ref={noteRef}>
           {name}
            <StyledPin className="pin" onClick={(e) => removeNote(name, noteRef, e)}></StyledPin>
            <StyledText onChange={(e) =>textAdded(index, e)}></StyledText>
        </StyledNote>
    )
}

export default Note;