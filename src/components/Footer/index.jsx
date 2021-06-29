import React from 'react';

import {FooterContent, FooterText} from './styled.jsx';

const Footer = (props) =>{
    return(
        <FooterContent>
            <FooterText>{props.text}</FooterText>
        </FooterContent>
    )
}

export default Footer;