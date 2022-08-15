import React from "react";
import "./gameplay.css"
import game from "../../images/game.png"
import Item from "../item/Item";
import Game from "../game/Game";
import Fight from "../fight/Fight";
import Br from "../br/Br";

const Gameplay = () => {
    return (
        <div className="gameplay-holder" id="gameplay">
            <div className="gameplay-title gradient-text-1">Gameplay</div>
            <div className="gameplay-box">
                <p className="gameplay-text">
                    Check your wallet inventory! <br />
                Now your NFTs have attribute stats based on the NFT Metadata! <br />
                    Pick the NFT with the best stats from your wallet!
                </p>
                <Item />
            </div>
            <Br />
            <div className="gameplay-box">
                <p className="gameplay-text reverce">
                    Compete with other players!
               Create or join the battle. Select a free type of the battle or battle with the bet.
                </p>
                <Game />
            </div>
            <Br />
            <div className="gameplay-box fight">
                <p className="gameplay-text">
                Fight. Win. And Earn! <br />
                Take your opponents bet by bitting him!
                Increase your ranking by winning others!
                </p>
                <Fight />
            </div>
        </div>
    )
}

export default Gameplay