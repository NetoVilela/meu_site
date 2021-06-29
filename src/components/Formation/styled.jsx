import styled from 'styled-components';

export const FormationContent = styled.div`
    margin-bottom: 5vh;
    border: solid 1px #3E3F55;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #3E3F55;

    :hover{
        margin-top: -8px;
        margin-right: -10px;
        transition: 0.3s;
    }

    
`;

export const Degree = styled.h2`
    margin: 10px 5px;
    font-weight: normal;
    @media only screen and (max-width: 600px){
        font-size: 0.7em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 0.7em;
    }
    @media only screen and(min-width: 901px){
        font-size: 1em;
    }
`;

export const Course = styled.h4`
    margin: 10px 5px;
    font-weight: normal;
    @media only screen and (max-width: 600px){
        font-size: 0.7em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 0.7em;
    }
    @media only screen and(min-width: 901px){
        font-size: 1em;
    }
`;

export const Institution = styled.h4`
    margin: 10px 5px;
    font-weight: normal;
    @media only screen and (max-width: 600px){
        font-size: 0.7em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 0.7em;
    }
    @media only screen and(min-width: 901px){
        font-size: 1em;
    }
`;

export const FormationBar = styled.div`
    margin: 20px 5px;
    width: 40vw;
`;

export const Date = styled.div`
    margin: 10px 5px;
    font-weight: normal;
    @media only screen and (max-width: 600px){
        font-size: 0.6em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 0.7em;
    }
    @media only screen and(min-width: 901px){
        font-size: 1em;
    }
`;