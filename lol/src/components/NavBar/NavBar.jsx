import React, { useState } from 'react'
import styled from 'styled-components';
import HomeContainer, { Container, HomeLabel, Linkk, Name, Name2, NavBar, Skills, Wtf } from '../styled';
import Typewriter from 'typewriter-effect';
import TextSpan from '../TextSpan';
import { BrowserRouter, Link } from 'react-router-dom';
import "../Components.css"

const NavBarr = () => {
    const sentence = "Home".split("");
    const sentence2 = "Skills".split("");
    const sentence3 = ["A", "b", "o", "u", "t", "\u00A0", "M","e"]
    const sentence4 = "Contact".split("");
    
    const scrollToSection = (id) =>{
        const section = document.getElementById(id);
        if (section){
            section.scrollIntoView({behavior:"smooth"});
        }
    }

    
    const [isActive,setisActive] = useState(false);
    

    return (
        
            <NavBar>
                    <Name>Luis</Name>
                    
                    {/* <Name2>{texts[textIndex]}</Name2> */}
                    <Name2>
                        <Wtf>
                        <Typewriter
                            options={{
                                strings:["Gutiérrez", "Programmer", "Bilingual"],
                                autoStart:true,
                                loop:true,
                                
                            }}
                        />                        
                        </Wtf>

                    </Name2>

                    <Container>
                        <BrowserRouter >


                            <Linkk to="/" id="homelink">
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

                            <Linkk to="/Contact">
                                {sentence4.map((letter,index)=>{

                                    return(<TextSpan key={index}>{letter}</TextSpan>)
                                })}
                                
                            </Linkk>


                        </BrowserRouter>

                    </Container>


                </NavBar>
    )
}

export default NavBarr
