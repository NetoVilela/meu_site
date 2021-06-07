import styled from 'styled-components';

const Text = styled.p`
   
    display: flex;
    align-items:center;
    font-size: 1.2rem;
    text-align: center;
    margin-top : 6vh;

    @media only screen and (max-width: 400px) {
        margin-top : 10vh;
        font-size: 1rem;
        text-align: justify;
    }
    @media only screen and (min-width: 401px) and(max-width: 600px){
        margin-top : 10vh;
        text-align: justify;
        font-size: 1rem;
    }
    @media only screen and (min-width: 601px) and (max-width: 900px){
        margin-top : 6vh;
        text-align: justify;
    }
`;


export default Text;