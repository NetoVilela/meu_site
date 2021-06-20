import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

import {TopicCircle, TopicStructure, TopicHeader, TopicLine, TopicName, Icon, TopicContent} from './styled.jsx';


const Topic = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
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
                <Icon className= {isOpen ? "fas fa-times icon iconHide" : 'fas fa-plus icon '} onClick={toggle} style={{ marginBottom: '1rem' }}></Icon>
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