import {styled, keyframes} from 'styled-components';
import {Link} from "react-router-dom"



const HomeContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: #EEE7DB;
font-size: 16px;
color: white;
overflow:hidden;

`;


const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`;
const deleting = keyframes`
    from { width: 100% }
    to { width: 0 }
`;

export const NavBar = styled.nav`
padding: 20px;
height: 2vh;
padding-top:1rem;
padding-bottom:1.7rem;
position:relative;
overflow: hidden; /* Ocultar contenido que desborde */

display:flex;
width:100%;
background-image: linear-gradient(to bottom, rgba(231, 218, 194,0.9), #EEE7DB);

position: fixed; /* Mantener fijo en la parte superior */
top: 0; /* Alinear en la parte superior */
z-index: 2; /*

`;

export const Name = styled.div`
    color:#0D0D0D;
    font-size: 1.4rem;
    padding-left:2vw;
    user-select:None;

`;

export const Name2 = styled.div`
color: #6C6C71;
font-size: 1.4rem;
user-select:None;
max-height:1.4rem;
width:auto;
white-space: nowrap; /* Evita que el texto se divida en varias líneas */

`;

export const HomeLabel = styled.path`
    margin-left: 35vw; /* Alinear a la derecha */
    font-size: 1.4rem;

    user-select:None;
    cursor:grab;
    position:absolute;


`;

export const Skills = styled.path`
    margin-left: auto; /* Alinear a la derecha */
    font-size: 1.4rem;
    display:inline-block;
    user-select:None;
    cursor:grab;
    padding-left: 1vw;
    max-height: 1.4rem;
    height:1.4rem;
    margin-right: auto;
    overflow: hidden; 

`;
export const Wtf = styled.div`

    overflow:hidden;
    
`;


export const Container = styled.div`
    margin-left:auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-right: 2vw;
    
`

export const Linkk = styled(Link)`
margin-left: auto; /* Alinear a la derecha */
font-size: 1.4rem;
color:#BCAA0F;
padding-right:1vw;
display:inline-block;
user-select:None;
cursor:grab;
padding-left: 1vw;
margin-right: auto;
color: inherit; /* Hereda el color del texto del elemento padre */
text-decoration: none;
max-height: 1.4rem;
height:1.4rem;
margin-right: auto;
overflow: hidden; 


`;

export const HomeItems = styled.div`
    padding-top: 25vh;
    overflow:hidden;
    height:70vh;

`;


const fadeInUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const HomeText = styled.div`
    opacity: 0;

    animation: ${fadeInUpAnimation} 1s ease forwards;  
    user-select:none;
    font-family:"Runtoe";
    text-align:left;
    font-size:2.9rem;
    padding-left:90px;
    padding-top:14px;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.538);

    

`;


export default HomeContainer;
