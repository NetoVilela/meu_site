import React from 'react';

import {VerseContent, VerseReference, VerseText} from './styled.jsx';

const Verse = (props) =>{
    return(
        <VerseContent>
            <VerseText>
                "{props.text}"
            </VerseText>
            <VerseReference>
                {props.reference}
            </VerseReference>
        </VerseContent>
    )
}

export default Verse;