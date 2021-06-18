import React from 'react';

import {FormationContent, Degree, Course, Institution, FormationBar} from './styled';

const Formation = (props) =>{

    return(
        <FormationContent>
            <Degree>{props.degree} - {props.status} </Degree>
            <Course>{props.course}</Course>
            <Institution>{props.initials} - {props.institution}</Institution>
            
            {props.bar ? <FormationBar/> : ''}
        </FormationContent>
    )

}

export default Formation;