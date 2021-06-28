import React from 'react';

import { KnowledgeContent, Image, ProgressBarGray, ProgressBarGreen, ProgressBarLegend, BarContent} from './styled';

import './style.css';

const Knowledge = (props) =>{
    return(
            <KnowledgeContent >
                <Image src={props.src}></Image>
                <BarContent>
                    <ProgressBarGray>
                        <ProgressBarGreen className={"BarGreen"+props.level} />
                    </ProgressBarGray>
                    <ProgressBarLegend>
                        <small>1</small><small>3</small><small>5</small>
                    </ProgressBarLegend>
                </BarContent>
            </KnowledgeContent>
    )
}

export default Knowledge;