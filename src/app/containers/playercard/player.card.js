import { useState } from "react";
import "./player.card.css";

function Card(props) {

    const [player] = useState(props.jugador);

    return (<div className="payer-card">
        <div className="photo">
            <div className="photo-player">
                <img src={player.foto_jugador} height="400px" alt="" />
            </div>
            <div className="photo-shirt">
                <img src={player.foto_portada} height="400px" alt="" />
            </div>
        </div>
        <div className="card-footer">
            <div className="div-dorsal">
                <p className="card-dorsal"><strong>{player.dorsal}</strong></p>
            </div>
            <p className="card-name"><strong>{player.apodo}</strong></p>
        </div>
    </div>)
}

export default Card;