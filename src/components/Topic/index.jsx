import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

import {TopicCircle, TopicStructure, TopicHeader, TopicLine, TopicName, Icon, TopicContent} from './styled.jsx';


const Topic = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    console.log(isOpen)
    return (
        <TopicStructure>
            <TopicHeader >
                <TopicCircle>
                    {props.number}
                </TopicCircle>
                <TopicName>
                    {props.title}
                </TopicName>
                <TopicLine />
                <Icon className="fas fa-plus icon" onClick={toggle} style={{ marginBottom: '1rem' }}></Icon>
            </TopicHeader>
            <Collapse isOpen={isOpen}>
                <TopicContent>
                    {props.children}
                </TopicContent>
            </Collapse>
        </TopicStructure>
    )
}

export default Topic;