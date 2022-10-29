import { useState } from "react";
import { FormControl, TextField } from "@mui/material";
/* ----------------------------------- MUI ---------------------------------- */
import { Stack } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "@mui/material";
/* ----------------------------------- MUI ---------------------------------- */
import { DateTime } from "luxon";
import style from "@/styles/RegistroPagoFisico.module.css";

export default function RegistroPagoFísico() {
  const [fechaPago, setFechaPago] = useState(DateTime.now());

  return (
    <>
      <h1>Registro de pago físico</h1>
      <div className={style.rectangle}>
        <Stack direction="row" spacing={2} sx={{ marginTop: "10px" }}>
          <TextField
            id="EventoDeportivo"
            label="Evento deportivo al que pertenece el pago"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="EquipoPago"
            label="Equipo que pago"
            variant="outlined"
            fullWidth
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ marginTop: "10px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disableFuture
              label="Fecha de Pago"
              inputFormat="DD/MM/YYYY"
              value={fechaPago}
              onChange={(newValue) => setFechaPago(newValue)}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "100%" }} />
              )}
            />
          </LocalizationProvider>
          {/* <TextField id='FechaPago' label='Fecha de pago' variant="outlined" fullWidth/> */}
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ marginTop: "10px" }}>
          <TextField
            id="NombrePago"
            label="Concepto"
            variant="outlined"
            sx={{ width: "49%" }}
          />
        </Stack>
        <TextField
          id="notas"
          label="Notas (opcional)"
          multiline
          rows={5}
          sx={{ marginTop: "10px" }}
          fullWidth
        />
        <div className={style.buttons}>
          <div>
            <Button variant="contained">Aceptar</Button>
          </div>
          <div>
            <Button variant="contained" color="error">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
