import React from 'react';

import Image from './Image/image';
import Text from './Text/text';

import './style.css';

const Apresentation = () =>{
    return(
        <div className="d-flex  apresentation">
            <Image />
            <Text className="text-light text-justify">
            Lorem Ipsum is simply dummy text of
             the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard 
             dummy text ever since the 1500s, when an unknown 
             printer took a galley of type and scrambled it to 
             make a type specimen book. It has survived not only five 
             centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, a
              nd more recently with desktop publishing software like Aldus PageMaker inclu
              ding versions of Lorem Ipsum.

 
            </Text>
        </div>
    )
}

export default Apresentation;
