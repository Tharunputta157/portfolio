import React from "react";
import '../styles/skills.css';
import Skill from "../components/Skill";

function Skills(){
    return(
        <div id="skills" className="skills">
            <h1 style={{textAlign:"center"}}>Skills</h1>
            <div className="skills-container">
                
                {/* <div className="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"></img>
                    <p>Python</p>

                </div> */}
                <Skill name="JavaScript" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
                <Skill name="Python" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
                <Skill name="React" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                <Skill name="Html" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                <Skill name="Css" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
                <Skill name="Bootstrap" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"/>
                <Skill name="MySql" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/>
                <Skill name="Java" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
                <Skill name="C" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/>
                <Skill name="TypeScript" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
                <Skill name="NodeJs" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"/>
                <Skill name="Git" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
                <Skill name="MongoDB" link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"/>




            </div>
            
        </div>
    )
}

export default Skills;