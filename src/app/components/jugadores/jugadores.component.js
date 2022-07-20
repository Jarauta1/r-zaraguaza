import { useEffect, useState } from "react";
import jugadorService from "../../core/services/jugador.service";
import Card from "../../containers/playercard/player.card";
import "./jugadores.component.css";

function Players(props) {

    const [players, setPlayers] = useState([])

    useEffect(function () {
        getJugadores();
    }, [])

    function getJugadores() {
        jugadorService.getJugadores().then((data) => {
            setPlayers(data)
        })
    }

    const showPlayers = players.map( player => {
        return <Card jugador={player} key={player.jugador_id}/>
    })

    return(<div className="screen">
        <div className="player-card">
            { showPlayers }
        </div>
    </div>)
}

export default Players;