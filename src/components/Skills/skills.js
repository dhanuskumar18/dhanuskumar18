import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span><br/>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient in html,css,java script, as a well as design sofware such as adobe photoshop and illustrator. </span>
<div className="skillBars">
    <div className="skillBar"> <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
    <div className="skillBarText">
        <h2>UI/UX design</h2>
        <p>this is a demo text</p>
    </div>
    </div>
    <div className="skillBar"> <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
    <div className="skillBarText">
        <h2>Website Design</h2>
        <p>this is a demo text</p>
    </div>
    </div>
    <div className="skillBar"> <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
    <div className="skillBarText">
        <h2>App design</h2>
        <p>this is a demo text</p>
    </div>
    </div>
       </div>
        </section>
    )
}

export default Skills;