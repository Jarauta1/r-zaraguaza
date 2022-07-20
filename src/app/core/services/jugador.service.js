import { environment } from "../../../environments/environments";
import { CONSTANTS } from "../utils/constants";

class JugadorService {

  getJugadores() {
    return fetch(environment.baseUrl + CONSTANTS.GET_JUGADORES, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()).then((data) => {
      return data;
    })
  }

  getJugadorById(id) {
    return fetch(environment.baseUrl + CONSTANTS.GET_JUGADOR_ID.replace(':id', id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()).then((data) => {
      return data[0];
    })
  }

  createJugador(jugador) {
    return fetch(environment.baseUrl + CONSTANTS.CREATE_JUGADOR, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({jugador}),
    }).then((res) => res.json()).then((data) => {
      return data;
    })
  }

  updateJugador(jugador,id) {
    return fetch(environment.baseUrl + CONSTANTS.UPDATE_JUGADOR.replace(':id', id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jugador),
    }).then((res) => res.json()).then((data) => {
      return data;
    })
  }

  deleteJugador(id) {
    return fetch(environment.baseUrl + CONSTANTS.DELETE_JUGADOR.replace(':id', id), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()).then((jugadores) => {
      return jugadores;
    })
  }
}

export default new JugadorService();