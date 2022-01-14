import { useState, useEffect, Component } from "react";
import JugadorService from "../../core/services/jugador.service";

function Jugadores(props) {


    /*  let [jugadores, setJugadores] = useState([]) */

    useEffect(function () {
        getJugadores();
    }, [])

    function getJugadores() {
        JugadorService.getJugadores().then((data) => {
            console.log(data)
        })
    }

    function getJugadorById(id) {
        JugadorService.getJugadorById(id).then((data) => {
            console.log(data)
        })
    }

    function createJugador(jugador) {
        JugadorService.createJugador(jugador).then((data) => {
            console.log(data)
        })
    }

    function updateJugador(jugador, id) {
        JugadorService.updateJugador(jugador, id).then((data) => {
            console.log(data)
        })
    }

    function deleteJugador(id) {
        JugadorService.deleteJugador(id).then((data) => {
            console.log(data)
        })
    }


    return (<div>
        <button onClick={getJugadores} className="btn btn-success">
            TODOS
        </button>
        <button onClick={getJugadorById(1)} className="btn btn-success">
            UNO
        </button>
        <button onClick={createJugador({
            equipo_id: 1,
            nombre_jugador: "Pablo",
            apellido1: "Perez",
            apellido2: "Muñoz",
            apodo: "Ariete",
            fecha_nacimiento: "1987-08-23",
            foto_jugador: "",
            dorsal: 41,
            posicion: "Pivot",
            altura: 180,
            total_goles: 2,
            total_asistencias: 0,
            total_amarillas: 0,
            total_rojas: 0,
            total_encajados: 0,
            pais: "España",
            ciudad: "Zaragoza"
        })} className="btn btn-success">
            CREAR
        </button>
        <button onClick={updateJugador({
            jugador_id: 2,
            equipo_id: 1,
            nombre_jugador: "Pablo",
            apellido1: "Perez",
            apellido2: "Muñoz",
            apodo: "Ariete",
            fecha_nacimiento: "1987-08-23",
            foto_jugador: "",
            dorsal: 41,
            altura: 180,
            total_goles: 4,
            total_asistencias: 0,
            total_amarillas: 0,
            total_rojas: 0,
            total_encajados: 0,
            pais: "España",
            ciudad: "Zaragoza"
        },2)} className="btn btn-success">
            ACTUALIZAR
        </button>
        <button onClick={deleteJugador(2)} className="btn btn-success">
            BORRAR
        </button>
    </div>)


}

export default Jugadores;