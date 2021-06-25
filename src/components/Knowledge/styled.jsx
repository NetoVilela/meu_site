import styled from 'styled-components';

export const Image = styled.img`
    width: 60px;
`;

export const KnowledgeContent = styled.div`
    width: 25%;
    min-width: 250px;
    margin-bottom: 5vh;
    margin: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
    border: solid 3px rgba(55, 231, 26, 0.1);
    border-radius: 4px;
    :hover{
        border: solid 3px rgba(55, 231, 26, 0.5);
        transition: 0.2s;
    }
`;

export const BarContent = styled.div`
    margin-top: 1vh;
    margin-left: 20px;
    flex-grow: 1;
`;

export const ProgressBarGray = styled.div`
    background-color: #3E3F55;
    width: 100%;
    display: block;
    height: 6px;
`;

export const ProgressBarGreen = styled.div`
    background-color: #37E71A;
    height: 6px;
`;

export const ProgressBarLegend = styled.div`
    font-size: 1.4em;
    display: flex;
    justify-content: space-between;
`;