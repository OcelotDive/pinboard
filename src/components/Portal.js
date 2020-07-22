import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const StyledPortalContainer = styled.div`
    position: absolute;
    width: 40%;
    height: 50%;
    left: 30%;
    top: 30%;
    background-color: aliceblue;
    border: solid 1px red;
`;

const Portal = () => {
    return ReactDOM.createPortal(
        <StyledPortalContainer>
            <input type="textArea" aria-label="noteText" />
        </StyledPortalContainer>,
        
        document.getElementById('portal_root'));
}

export default Portal;