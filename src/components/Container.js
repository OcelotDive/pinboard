import React from 'react';
import styled from 'styled-components';
import corkImage from '../assets/corkboard.png';
import Note from './Note';

const StyledContainer = styled.section`
    width: 60%;
    height: 80%;
    position: absolute;
    margin: 2.5% 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #999;
    box-shadow: 3px 3px 3px #000;
`;

const StyledBackground = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`


const Container = ({notes, removeNote, textAdded}) => {
    return (
        <StyledContainer>
            <StyledBackground src={corkImage}/>
            {notes.map((note, index) => <Note key={index} index={index} removeNote={removeNote} textAdded={textAdded} />)}
        </StyledContainer>
    )
}

export default Container;