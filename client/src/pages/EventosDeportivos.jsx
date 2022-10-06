import React from "react";
import { 
  Button,
  Typography, 
  Stack, 
  Autocomplete, 
  TextField,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";
import style from "../styles/EventosDeportivos.module.css";

export default function EventosDeportivos(){
    return(
    <>
        <div className={style.container}>
        <h1>Eventos Deportivos</h1>
        <div className={style.rectangle}>
          <Stack spacing={2} direction="row">
          <FormGroup>
            <Typography variant="h6">Filtrar por:</Typography>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Futbol" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Softball" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Baseball" />
          </FormGroup>
          
          </Stack>
        </div>
        </div>
    </>
    );
}