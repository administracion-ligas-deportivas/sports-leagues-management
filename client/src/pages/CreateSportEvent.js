import "@fortawesome/fontawesome-svg-core/styles.css";

//import Head from "next/head";
import styles from "../styles/EditarPerfil.module.css";
import {
    Button,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
}from "@mui/material";

export default function CrearEventoDeportivo() {
    const options = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {   
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.titlePage}>Crear Liga</h1>
                <div className={styles.rectangle}>
                    <div className={styles.tipoLiga}>
                        <TextField
                            fullWidth 
                            id="name"
                            label="Tipo de Liga"
                            margin="normal"
                            // onChange={(event) => setName(event.target.value)}
                            // InputLabelProps={{ shrink: true }}
                        />
                    </div>
                    <div className={styles.numTeams}>
                        <TextField
                            fullWidth 
                            id="numTeams"
                            label="Número de Equipos"
                            margin="normal"
                            // onChange={(event) => setName(event.target.value)}
                            // InputLabelProps={{ shrink: true }}
                        />
                    </div>
                    <div className={styles.fecha}>
                        <TextField
                            fullWidth 
                            id="dateStart"
                            label="Fecha de inicio"
                            margin="normal"
                            // onChange={(event) => setName(event.target.value)}
                            // InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            fullWidth 
                            id="dateEnd"
                            label="Fecha de fin"
                            margin="normal"
                            // onChange={(event) => setName(event.target.value)}
                            // InputLabelProps={{ shrink: true }}
                        />
                    </div>
                    <div className={styles.datos}>
                        <TextField
                            id="category"
                            select
                            label="Categoria"
                            margin="normal"
                            // value={currency}
                            // onChange={handleChange}
                            helperText="Selecciona la categoria"
                        >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        <TextField
                            fullWidth 
                            id="referees"
                            label="Arbitros"
                            margin="normal"
                            // onChange={(event) => setName(event.target.value)}
                            // InputLabelProps={{ shrink: true }}
                        />
                        <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="cantidad"
                        />
                        </FormControl>
                    </div>
                    <div className={styles.rules}>
                    <TextField
                        fullWidth
                        margin="normal"
                        id="rules"
                        label="Reglas"
                        multiline
                        rows={5}
                        placeholder=" 1.- Regla 1
                        2.- Regla 2 
                        3.- Regla 3"
                    />
                    </div>
                </div>
            </div>
        </>
    );
}