import styled from 'styled-components';

export const TopicStructure = styled.div`
    border: solid 1px rgba(62, 63, 85, 0.4);
    border-radius: 6px;
    margin: 10vh 0;
    color: #fff;
    @media only screen and (max-width: 430px){
        margin: 20vh 0;
    }
    @media only screen and (min-width: 431px) and (max-width: 600px){
        margin: 10vh 0;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
       
    }
    @media only screen and(min-width: 601px) and(max-width: 900px){
      
    }
`;

export const TopicHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3px;
    border-radius: 6px;
    align-items: center;
`;

export const TopicCircle = styled.div`
    width: 60px;
    height: 60px;
    border: solid 1px #3E3F55;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    @media only screen  and (max-width: 600px){
        width: 30px;
        height: 30px;
        font-size: 1.5em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        width: 40px;
        height: 40px;
        font-size: 2em;
    }
    @media only screen and(min-width: 601px) and(max-width: 900px){
        width: 40px;
        height: 40px;
        font-size: 2em;
    }
`;

export const TopicName = styled.div`
    font-style: italic;
    font-size: 2.5em;
    margin: 0px 10px;
`;

export const Icon = styled.div`
    font-size: 2.5em;
    margin: 10px;
    cursor: pointer;
    @media only screen and (max-width: 600px){
        font-size: 1.31em;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        font-size: 1.5em;
    }
    @media only screen and(min-width: 601px) and(max-width: 900px){
        font-size: 2em;
    }
`;

export const TopicLine = styled.div`
    flex-grow: 1;
    height: 1px;
    border-bottom: solid 1px #3E3F55;
`;

export const TopicContent = styled.div`
    margin: 2vh;
`;