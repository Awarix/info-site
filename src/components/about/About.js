import React from 'react';
import "./about.css"
import phantom from "../../images/phantom.png"

const About = () => {
    return (
        <div className='about-container' id="about">
            <div className='about-description'>
                <h1>Introducing <br /> Sol Battle</h1>
                <p>
                    Sol Battle is a cross-NFT game where you can 
                    play with NFTs you are already own.
                </p>
            </div>
            <div className='about-image'>
                <img alt="" src={phantom}></img>
            </div>
        </div>
    )
}

export default About