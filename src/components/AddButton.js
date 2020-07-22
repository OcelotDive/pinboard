import React, { useState } from 'react';
import styled, {css} from 'styled-components';

const StyledAddButton = styled.button`
    outline: none;
    border: none;
    background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: #fff;
    padding: 1.2%;
    font-size: .8vw;
    position: absolute;
    top 10%;
    left: 5%;
    
   
    &:hover {
        background: #0F2027;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
    color: #fff;
    }

    &:active {
        border: solid 1px transparent;
        background: #16222A;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3A6073, #16222A);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        

        

        color: #fff;
    }
    ${({stat}) => stat === 'prime' && css`
    background-color: #fff;
   `}
`

const AddButton = ({addNote}) => {
    return (
    <StyledAddButton onClick={addNote}>Add Post-it</StyledAddButton>
    )
}

export default AddButton;