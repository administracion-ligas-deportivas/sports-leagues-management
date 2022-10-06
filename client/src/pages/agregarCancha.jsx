import React from "react";
import { 
    Button,
    Typography, 
    Stack, 
    Autocomplete, 
    TextField,
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import style from "../styles/AgregarCancha.module.css";

export default function AgregarCancha(){
    const canchas = [
        { label: "Cancha 1", id: 1 },
        { label: "Cancha 2", id: 2 },
        { label: "Cancha 3", id: 3 },
        { label: "Cancha 4", id: 4 },
        { label: "Cancha 5", id: 5 },
    ];

    return(
        <>
            <h1>Registro de Canchas</h1>
            <div className={style.container}>
                <div className={style.rectangle}>
                    <Stack spacing={2} direction="row" className={style.form}>
                        <Autocomplete
                            id="buscar-usuario"
                            fullWidth
                            size="small"
                            options={canchas}
                            renderInput={(params) => <TextField {...params} label="Deportivo" />}
                        />
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Nombre de la cancha"
                            variant="outlined"
                            size="small"
                        />
                    </Stack>
                    <Stack spacing={2} direction="row" className={style.form}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Número de cancha"
                            variant="outlined"
                            size="small"
                        />
                        <div className={style.aux}></div>
                    </Stack>
                    <Stack direction="row" spacing={2} className={style.button}>
                        <Button variant="contained" color='error'>Cancelar</Button>
                        <Button variant="contained">Guardar</Button>
                    </Stack>
                </div>
            </div>
        </>
    );
}