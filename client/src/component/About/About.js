import React from 'react';
import Image from 'react-bootstrap/Image';
import './about.css';

const About = () => {
    return (
        <div className="about-section">
        <h1>What is Dungeon Master?</h1>
        <div className="box-1">
        <Image className="sword" src={require("./bow.png")} />
         <p>Dungeon Master is a D&D Character tracker app.</p> 
        </div>
       
        <div className="box-2">
        <Image className="sword" src={require("./sword.png")} />
            <p>You'll be able to create characters, save or edit them as you choose, and create groups to track who you're playing with.</p>
        </div>
        </div>
    )
}

export default About;