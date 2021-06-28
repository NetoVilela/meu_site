import React from 'react';

//Images


import {ContactContent, ContactLogo, ContactText, ContactLink} from './styled';

const Contact = (props) =>{
    return(
        <ContactContent>
            <ContactLogo src={props.src} />
            {props.link ? 
            <ContactLink href={props.link} target="_blank">{props.text}</ContactLink> 
            : <ContactText>{props.text}</ContactText>}
            
        </ContactContent>
    )
}

export default Contact;