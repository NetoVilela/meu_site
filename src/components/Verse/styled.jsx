import styled from 'styled-components';

export const VerseContent = styled.div`
    font-size: 1.4em;
    margin-right: 10vh;
    @media only screen and (max-width: 600px){
        font-size: 0.8em;
        margin-right: 3vh;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 0.9em;
    }
    @media only screen and(min-width: 601px) and(max-width: 900px){
        font-size: 1.4em;
    }
`;

export const VerseText = styled.p`
    color: #fff;
    display: flex;
    justify-content: flex-end;
    font-style: italic;
`;

export const VerseReference = styled.p`
    color: #fff;
    display: flex;
    justify-content: flex-end;
    font-style: italic;
`;