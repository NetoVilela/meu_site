import React from 'react';
import styled from 'styled-components';

const TopicContent = styled.div`
    border: solid 1px rgba(62, 63, 85, 0.4);
    border-radius: 6px;
    margin: 40px 0;
    color: #fff;
`;

const TopicHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3px;
    border-radius: 6px;
    align-items: center;
`;

const TopicCircle = styled.div`
    width: 60px;
    height: 60px;
    border: solid 1px #3E3F55;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
`;

const TopicName = styled.div`
    font-size: 2.5em;
    margin: 0px 10px;
`;

const TopicLine = styled.div`
    flex-grow: 1;
    height: 1px;
    border-bottom: solid 1px #3E3F55;
`;

const Topic = (props) =>{
    return(
        <TopicContent>
            <TopicHeader >
                <TopicCircle>
                    {props.number}
                </TopicCircle>
                <TopicName>
                    {props.title}
                </TopicName>
                <TopicLine />
            </TopicHeader>
        </TopicContent>
    )
}

export default Topic;