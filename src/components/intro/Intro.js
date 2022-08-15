import React from 'react';
import "./intro.css"

const Intro = () => {
    return (
        <div className='intro-container' id="home">
            <div className='intro-battle'><span className="gradient-text-1">Battle.</span></div>
            <div className='intro-battle'><span className="gradient-text-2">Win.</span></div>
            <div className='intro-battle'><span className="gradient-text-3">Earn.</span></div>
        </div>
    )
}

export default Intro