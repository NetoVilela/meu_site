import React from 'react';

import {FormationContent, Degree, Course, Institution, Date, FormationBar} from './styled';

const Formation = (props) =>{

    return(
        <FormationContent>
            
            <Course>{props.course} ({props.degree})</Course>
            <Degree>{props.status} </Degree>
            
            <Institution>{props.initials} - {props.institution}</Institution>
            <Date>Iniciado em: {props.dateStart}</Date>
            {props.concluded ? <Date>Finalizado em: {props.dateEnd}</Date> : <Date>Previsão de conclusão em: {props.dateEnd}</Date> }
            {props.bar ? <FormationBar/> : ''}
        </FormationContent>
    )

}

export default Formation;