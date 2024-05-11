
import React from 'react';
import python from "../Media/Python.webp";
import "./Components.css";
import reactimage from "../Media/React.svg";
import django from "../Media/Django.webp";
import { HomeText } from './styled';
import js from "../Media/JavaScript.svg"
import git from "../Media/github.svg"
import leetcode from "../Media/LeetCode.webp"
import html from "../Media/html5.webp";

const SkillsComponent = () => {
  return (
    <div>
        <HomeText id="SkillsText">
            Mainly Tools Control
        </HomeText>

        <div>
            <img className="skillimg" src={python}/>
            <img className="skillimg" src={reactimage}/>
            <img className="skillimg" src={js}/>
            <img className="skillimg" src={django}/>
            <img className="skillimg" src={git}/>
            <img className="skillimg" src={leetcode}/>
            <img className="skillimg" src={html}/>

        </div>

    </div>
  )
}

export default SkillsComponent
