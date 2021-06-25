import React from 'react';

import {Knowledges, KnowledgeContent, Image, ProgressBarGray, ProgressBarGreen, ProgressBarLegend, BarContent} from './styled';



const Knowledge = (props) =>{
    return(
        <Knowledges>
            <KnowledgeContent >
                <Image src={props.src}></Image>
                <BarContent>
                    <ProgressBarGray>
                        <ProgressBarGreen />
                    </ProgressBarGray>
                    <ProgressBarLegend>
                        <small>1</small><small>3</small><small>5</small>
                    </ProgressBarLegend>
                </BarContent>
                
            </KnowledgeContent>
         
        </Knowledges>
    )
}

export default Knowledge;