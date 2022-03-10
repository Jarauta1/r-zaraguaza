import "./team-data.configuration.css";
import { app } from "../../../environments/environments"
import { useEffect, useState } from "react";
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import teamService from "../../core/services/team.service";

function Config(props) {

    const [fileURL, setFileURL] = useState("")
    const [teams, setTeams] = useState([])
    const [teamId, setTeamId] = useState("")

    useEffect(function () {
        getTeams();
    }, [])

    function getTeams() {
        teamService.getTeams().then((data) => setTeams(data))
    }

    const handleChange = (event) => {
        setTeamId(event.target.value);
    };

    const fileHandler = async (event) => {
        const file = event.target.files[0];
        const storageRef = app.storage().ref('images');
        const filePath = storageRef.child(file.name);
        await filePath.put(file);
        console.log('archivo cargado: ', file.name);
        const linkURL = await filePath.getDownloadURL();
        setFileURL(linkURL);
        console.log(fileURL);
    }

    const showTeams = teams.map(team => <MenuItem value={team.equipo_id}>{team.nombre_equipo}</MenuItem>)

    return (<>
        <Container>
            <div className="col-md-12 mt-5">
                <div className="elevation card mx-5 p-3">
                    <div className="card border-primary mb-3">
                        <div className="card-header">Jugador</div>
                        <div className="card-body text-primary">
                            <div className="row mb-4">
                                <FormControl variant="outlined" className="col-6 px-2">
                                    <InputLabel id="">Equipo</InputLabel>
                                    <Select
                                        labelId=""
                                        id=""
                                       /*  name="team" */
                                        value={teamId}
                                        label="Equipo"
                                        onChange={handleChange}
                                       /*  variant="outlined" */
                                    >
                                        <MenuItem value=""><em>Seleccione un equipo</em></MenuItem>
                                        {showTeams}
                                    </Select>
                                </FormControl>
                                <TextField type="text" className="col-6 px-2" id="outlined" name="nombre_jugador" label="Nombre" variant="outlined" />
                            </div>
                            <div className="row mb-4">
                                <TextField type="text" className="col-6 px-2" id="outlined" name="apellido1" label="Primer apellido" variant="outlined" />
                                <TextField type="text" className="col-6 px-2" id="outlined" name="apellido2" label="Segundo apellido" variant="outlined" />
                            </div>
                            <div className="row mb-4">
                                <TextField type="text" className="col-6 px-2" id="outlined" name="apodo" label="Apodo" variant="outlined" />
                                <TextField type="text" className="col-6 px-2" id="outlined" name="apellido2" label="Segundo apellido" variant="outlined" />
                            </div>
                        </div>
                    </div>

                    <TextField id="outlined-basic" label="Nombre imagen" variant="outlined" />
                    <Button variant="contained" component="label">
                        Upload File
                        <input type="file" hidden onChange={fileHandler} />
                    </Button>

                    <br />
                    <p>{fileURL}</p>
                    <img src={fileURL} />
                </div>
            </div>
        </Container>
    </>)
}

export default Config;