import { useEffect, useState } from "react";
import principal from "../../../assets/principal.jpg"
import secundaria from "../../../assets/secundaria.jpg"
import "./player.card.css";

function Card(props) {

    const [player, setPlayer] = useState(props.jugador)

    useEffect(function () {
        console.log(player)
    }, [])

    return (<div className="payer-card">
        <div className="photo">
            <div className="photo-player">
                <img src={secundaria} height="400px" alt="" />
            </div>
            <div className="photo-shirt">
                <img src={principal} height="400px" alt="" />
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