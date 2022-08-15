import React from "react";
import Item from "../item/Item";
import "./fight.css"
// import {RiSwordLine} from "react-icons/ri"
import cross from "../../images/swords.png"


const Fight = () => {
    return (
        <div className="fight-holder">
            <div className="fight-item-holder">
                <div className="fight-item slide-in-left">
                    <Item />
                </div>
            <div className="fight-start slide-in-bck-top">
                {/* <RiSwordLine size={400}/> */}
                <img alt="" src={cross} className="fight-image"></img>
                <span className="fight-text gradient-text-3">FIGHT!</span>
            </div>
                <div className="fight-item slide-in-right">
                    <Item />
                </div>
            </div>
            
        </div>
    )
}

export default Fight