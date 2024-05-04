import React from 'react'
import styled from 'styled-components';
import HomeContainer, { Container, HomeLabel, Linkk, Name, Name2, NavBar, Skills } from '../styled';
import Typewriter from 'typewriter-effect';
import TextSpan from '../TextSpan';
import { BrowserRouter, Link } from 'react-router-dom';

const NavBarr = () => {
    const sentence = "Home".split("");
    const sentence2 = "Skills".split("");
    const sentence3 = ["A", "b", "o", "u", "t", "\u00A0", "M","e"]


    return (
            <NavBar>
                    <Name>Luis</Name>
                    
                    {/* <Name2>{texts[textIndex]}</Name2> */}
                    <Name2>
                        <Typewriter
                            options={{
                                strings:["Gutiérrez", "Programmer"],
                                autoStart:true,
                                loop:true,
                            }}
                        />
                    </Name2>

                    <Container>
                        <BrowserRouter>


                            <Linkk to="/">
                                    {sentence.map((letter,index)=>{

                                        return(<TextSpan key={index}>{letter}</TextSpan>)
                                    })}
                                    
                                </Linkk>

                            <Linkk to="/Skills" activeClassName="activeLink">
                                {sentence2.map((letter,index)=>{

                                    return(<TextSpan key={index}>{letter}</TextSpan>)
                                })}
                                
                            </Linkk>

                            <Linkk to="/About">
                                {sentence3.map((letter,index)=>{

                                    return(<TextSpan key={index}>{letter}</TextSpan>)
                                })}
                                
                            </Linkk>


                        </BrowserRouter>

                    </Container>


                </NavBar>
    )
}

export default NavBarr
