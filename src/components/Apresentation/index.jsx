import React, {useState} from 'react';

import Image from './Image/image';
import Text from './Text/text';

import './style.css';

const Apresentation = (props) =>{
    // const [texto, setTexto] = useState('');
    // let auxiliar;

    // function typeWrite(conteudo){
    //     let textArray = conteudo.split('');
        
    //     for(let i =0; i< textArray.length;i++){
    //         setTimeout(()=>{
    //             auxiliar = auxiliar + texto+textArray[i];
    //             setTexto(auxiliar)
    //         }, 75*i)
    //     }
    // }
    // typeWrite(props.text);

    return(
        <div className="d-flex  apresentation">
            <Image />
            <Text className="text-light text-justify">
                {props.text}
            </Text>
        </div>
    )
}

export default Apresentation;
