import React from 'react'
import { HomeText } from './styled'
import unipaz from "../Media/Unipaz.webp"
import "./Components.css"
import gold from "../Media/golds.webp"
import me from "../Media/me.jpeg"

const AboutMe = () => {
  return (
    <div>
        <div id="TextAbout">

        {/* Explaining */}

            <div>
                I'm a 20 years old student of Unipaz in the carrer of Informatic Engineer
                </div>
                <div>
                    Apassionate for the constant self imporving, physically and mentally.
                    
            </div>
        </div>

        {/* Images Section */}

        <div id='aboutimages'>
            <img src={unipaz} className='aboutimg'></img>
            <img src={me} className='aboutimg'></img>
            <img src={gold} className='aboutimg'></img>
        </div>

        
        {/* Title of section */}

        <HomeText id="aboutText">
            Know A Bit More 
        </HomeText>

    </div>
  )
}

export default AboutMe
