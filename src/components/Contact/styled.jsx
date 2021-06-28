import styled from 'styled-components';

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ContactContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2vh;
`;

export const ContactLogo = styled.img`
    width: 60px;
    margin-right: 1vh;
    @media only screen and (max-width: 600px){
        width: 30px;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 45px;
    }
    @media only screen and(min-width: 900){
        font-size: 60px;
    }
`;

export const ContactText = styled.p`
    font-weight: lighter;
    color: #fff;
    font-size: 1.5em;
    @media only screen and (max-width: 600px){
        font-size: 1em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 1.4em;
    }
    @media only screen and(min-width: 900){
        font-size: 1.5em;
    }
`;

export const ContactLink = styled.a`
    font-weight: lighter;
    color: #fff;
    text-decoration: none;
    font-size: 1.5em;
    @media only screen and (max-width: 600px){
        font-size: 1em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 1.4em;
    }
    @media only screen and(min-width: 900){
        font-size: 1.5em;
    }
    
`;