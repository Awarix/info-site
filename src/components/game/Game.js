import React from "react";
import Item from "../item/Item";
import "./game.css"

const Game = () => {
    return (
        <div className="game-holder">
            <div className="game-title">
                <h1 className="game-creator">0xCryptoGod</h1>
                <h3 className="game-creator-rating">Rating: 5231</h3>
            </div>
            <div className="game-main">
                <div className="game-main-left">
                    <Item />
                </div>
                <div className="game-main-right">
                    <div className="game-type">
                        <span className="game-type-text">Game type:</span>
                        <div className="betGame">With bet</div>
                    </div>
                    <div className="game-type">
                        <span className="game-type-text">Bet size:</span>
                        <div className="gamePrice">100 USDC</div>
                    </div>
                    <button className="game-start">Fight!</button>
                </div>
            </div>
            <div className="gameId">game id: #62517</div>
        </div>
    )
}

export default Game