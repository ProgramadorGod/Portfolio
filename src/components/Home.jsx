import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components';
import HomeContainer, { Container, HomeLabel, Linkk, Name, Name2, NavBar, Skills } from './styled';
import Typewriter from 'typewriter-effect';
import TextSpan from './TextSpan';
import { BrowserRouter, Link } from 'react-router-dom';
import NavBarr from './NavBar/NavBar';



const Home = () => {

    const sentence = "Home".split("");
    const sentence2 = "Skills".split("");
    const sentence3 = ["A", "b", "o", "u", "t", "\u00A0", "M","e"]


    return (
        
        <div>
            
        <HomeContainer>
            <NavBarr></NavBarr>
            {/* <BasicExample></BasicExample> */}

        </HomeContainer>
        </div>
    )
}

export default Home
