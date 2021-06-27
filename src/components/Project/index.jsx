import React from 'react';

import {ProjectBox, ProjectImage, ProjectText, Link} from './styled';

const Project = (props) =>{
    return(
        <ProjectBox>
            <ProjectImage src={props.src} />
            <ProjectText >{props.description} <Link href={props.link} target='blank'>Clique aqui e acesse.</Link></ProjectText>
        </ProjectBox>
    )
}


export default Project;