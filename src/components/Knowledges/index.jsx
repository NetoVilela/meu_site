import React from 'react';

import {KnowledgesContent} from './styled';

const Knowledges = (props) =>{
    return(
        <KnowledgesContent>
            {props.children}
        </KnowledgesContent>
    )
}

export default Knowledges;