import React from "react";
import "./item.css"
import image from "../../images/msc046.gif"
import health from "../../images/life.png"
import armor from "../../images/armor.png"
import attack from "../../images/sword.png"

const Item = () => {
    return (
        <div className="item-holder">
            <img alt="" src={image} className="item-image"></img>
            <div className="item-text">
                <h1 className="item-collection">Mutant Shiba Club</h1>
                <h2 className="item-name">MSC #3521</h2>
            </div>
                <div className="item-stats-holder">
                    <div className="item-stat">
                        <img alt="" src={health} className="stat-image"></img>
                        <span className="item-stat-value">100</span>
                    </div>
                    <div className="item-stat">
                        <img alt="" src={armor} className="stat-image"></img>
                        <span className="item-stat-value">50</span>
                    </div>
                    <div className="item-stat">
                        <img alt="" src={attack} className="stat-image"></img>
                        <span className="item-stat-value">30</span>
                    </div>
                </div>
        </div>
    )
}

export default Item