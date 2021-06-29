import styled from 'styled-components';

export const FooterContent = styled.div`
    height: 5vh;
    border-top: solid 1px #3E3F55;
    padding: 1vh;
    @media only screen and (max-width: 600px){
        font-size: 0.6em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 0.9em;
    }
    @media only screen and(min-width: 601px) and(max-width: 900px){
        font-size: 1.4em;
    }
`;

export const FooterText = styled.p`
    color: #fff;
    display: flex;
    justify-content: center;
`;
