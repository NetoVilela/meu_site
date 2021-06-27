import styled from 'styled-components';

export const Projects = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 1vh;
    border: solid 1px #3E3F55;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    margin: 2vh 3vh;
    
`;

export const ProjectImage = styled.img`
    width: 100%;
    max-height: 30vh;
    
`;

export const ProjectText = styled.p`
    font-weight: normal;
    text-align: justify;
    margin-top: 1vw;
    margin-bottom: 0px;
    word-wrap: break-word;
`;

export const Link = styled.a`
    font-weight: normal;
    text-decoration: none;
`;

