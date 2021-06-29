import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 60px;
    opacity: 0.4;
`;

const Link = styled.a`
    position: fixed;
    top: 91%;
    right: 0px;
    text-decoration: none;

    @media only screen  and (max-width: 600px){
       display: none;
    }
    @media only screen and(min-width: 900px){
        display: block;
    }
`;

const Up = (props) => {
    return(
        <Link href={props.href}><Img src={props.src} /></Link>
    )
}

export default Up;