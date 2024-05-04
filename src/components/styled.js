import {styled, keyframes} from 'styled-components';
import {Link} from "react-router-dom"



const HomeContainer = styled.div`
width: 100%;
height: 3000px;
display: flex;
justify-content: center;
background-color: #EEE7DB;
font-size: 16px;
color: white;

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
z-index:9999;
display:flex;
width:100%;
background-image: linear-gradient(to bottom, rgba(231, 218, 194), #EEE7DB);

position: fixed; /* Mantener fijo en la parte superior */
top: 0; /* Alinear en la parte superior */
z-index: 1000; /*

`;

export const Name = styled.div`
    color:black;
    font-size: 1.4rem;
    padding-left:2vw;
    user-select:None;

`;

export const Name2 = styled.div`
color: #6C6C71;
font-size: 1.4rem;
user-select:None;

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
    margin-right: auto;
    overflow: hidden; /* Ocultar contenido que desborde */

`;



export const Container = styled.div`
    margin-left:auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-right: 2vw;
`

export const Linkk = styled(Link)`
margin-left: auto; /* Alinear a la derecha */
font-size: 1.4rem;
display:inline-block;
user-select:None;
cursor:grab;
padding-left: 1vw;
margin-right: auto;
color: inherit; /* Hereda el color del texto del elemento padre */
text-decoration: none;
`;

export default HomeContainer;
