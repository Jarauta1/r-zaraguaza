import { useEffect, useState } from "react";
import "./classification.component.css";
import defaultShield from "../../../assets/default.png"
import teamService from "../../core/services/team.service";

function Classification(props) {

    const [teams, setTeams] = useState([])

    useEffect(function () {
        getTeams();
    }, [])

    function getTeams() {
        teamService.getTeams().then((data) => {
            setTeams(data.sort((teamA, teamB) => {
                if (teamA.puntos == teamB.puntos) {
                    return teamA.dg - teamB.dg;
                }
                return teamB.puntos - teamA.puntos;
            }));
        })
    }

    let position = 0;
    let positionClass = "";
    let lineColor = "";
    let borderbottomleft = "";
    let borderbottomright = "";
    const showTeams = teams.map(team => {
        position += 1;
        position % 2 == 0 ? lineColor = "line-color-b" : lineColor = "line-color-a";
        switch (position) {
            case 1:
                positionClass = "clteam";
                break;
            case 2:
                positionClass = "clplayoff";
                break;
            case 3:
            case 4:
                positionClass = "elteams";
                break;
            case 8:
            case 9:
                positionClass = "downteams";
                break;
            case 10:
                borderbottomright = "borderbottomright";
                borderbottomleft = "borderbottomleft";
                positionClass = "downteams";
                break;
            default:
                positionClass = "middleteams";
                break;
        }

        return (<>
            <tr className={lineColor}>
                <td id={positionClass} className={borderbottomleft}>{position}</td>
                <td id="teamsnames">
                    <img src={team.escudo || defaultShield} width="25px" height="25px" />
                    <span>&nbsp;&nbsp;{team.nombre_equipo}</span>
                </td>
                <td>{team.pj}</td>
                <td className="hide-small">{team.pg}</td>
                <td className="hide-small">{team.pe}</td>
                <td className="hide-small">{team.pp}</td>
                <td className="hide-small">{team.gf}</td>
                <td className="hide-small">{team.gc}</td>
                <td className="hide-small">{team.gf - team.gc}</td>
                <td className={borderbottomright}><strong>{team.puntos}</strong></td>
            </tr>
        </>)
    })

    return (<>
        <div id="content">
            <table className="league-table" id="teams" border="0" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th className="borederleft">#</th>
                        <th>Equipo</th>
                        <th>J</th>
                        <th className="hide-small">G</th>
                        <th className="hide-small">E</th>
                        <th className="hide-small">P</th>
                        <th className="hide-small">GF</th>
                        <th className="hide-small">GC</th>
                        <th className="hide-small">DG</th>
                        <th className="borderright">PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {showTeams}
                </tbody>
            </table>
            <br></br>
            <span>
                <div class="tableinfo">
                    <div id="clteam" class="colordiv"></div>
                    &nbsp;
                    <p>Campeón</p>
                </div>
                <div class="tableinfo">
                    <div id="clplayoff" class="colordiv"></div>
                    &nbsp;
                    <p>Ascenso directo</p>
                </div>
                <div class="tableinfo">
                    <div id="elteams" class="colordiv"></div>
                    &nbsp;
                    <p>Play-off ascenso</p>
                </div>
                <div class="tableinfo">
                    <div id="downteams" class="colordiv"></div>
                    &nbsp;
                    <p>Descenso</p>
                </div>
            </span>
            <br></br>
        </div>
    </>)
}

export default Classification;