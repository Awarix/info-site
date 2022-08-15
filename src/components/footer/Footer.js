import React from 'react';
import "./footer.css"
import {FaTwitter, FaDiscord, FaGithub} from "react-icons/fa"

const Footer = () => {
    return (
        <div className='footer-holder'>
            <ul className='footer-links'>
                <a href="https://twitter.com"><FaTwitter size={50} color="#fff"/></a>
                <a href="https://discord.com"><FaDiscord size={50} color="#fff"/></a>
                <a href="https://github.com"><FaGithub size={50} color="#fff"/></a>
            </ul>
        </div>
    )
}

export default Footer