import React from 'react';

import {TopicCircle, TopicContent, TopicHeader, TopicLine, TopicName, Icon} from './styled.jsx';


const Topic = (props) => {
    return (
        <TopicContent>
            <TopicHeader >
                <TopicCircle>
                    {props.number}
                </TopicCircle>
                <TopicName>
                    {props.title}
                </TopicName>
                <TopicLine />
                <Icon className="fas fa-plus icon"></Icon>
            </TopicHeader>
        </TopicContent>
    )
}

export default Topic;