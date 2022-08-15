import React from "react";
import "./earlyAccess.css"

const EarlyAccess = () => {
    return (
        <div className="EA-holder">
            <div className="EA-title gradient-text-2">
                Do you want to play before others?
            </div>
                <button type="button" className="EA-button">Get Early Access</button>
        </div>
    )
}

export default EarlyAccess