import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components';
import HomeContainer, { Container, HomeItems, HomeLabel, HomeText, Linkk, Name, Name2, NavBar, Skills } from './styled';
import Typewriter from 'typewriter-effect';
import TextSpan from './TextSpan';
import { BrowserRouter, Link } from 'react-router-dom';
import NavBarr from './NavBar/NavBar';
import { ScrollContainer, Section, Section3 } from './styledscroll';
import Image from './Image/Image';
import "./Components.css"
import { motion, useDragControls } from "framer-motion"
import { useAnimationFrame } from "framer-motion"
import { useRef } from "react";
import SkillsComponent from './Skills';
import AboutMe from './About';
import Contact from './Contact';

const Home = () => {


    const constraintsRef = useRef(null)



    return (
        
        <div>
        <ScrollContainer>

            {/* Section 1 */}

            <Section id='home' >
                <HomeItems>
                    {/* Section 1 Profile Pic */}
                    <Image></Image>



                </HomeItems>

            </Section>

            
            {/* Section 2 Skills */}
            <Section >
                <HomeItems id="AboutSec">
                    <SkillsComponent></SkillsComponent>

                </HomeItems>

            </Section>
            
            <Section3>
                <HomeItems>

                    <AboutMe></AboutMe>
                    


                </HomeItems>

            </Section3>

            <Section>
                <HomeItems>
                    <Contact></Contact>

                </HomeItems>

            </Section>

        </ScrollContainer>


        <HomeContainer>
            <NavBarr></NavBarr>
            {/* <BasicExample></BasicExample> */}
            

        </HomeContainer>
        </div>
    )
}

export default Home
