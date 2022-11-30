import styles from "../styles/GestionTorneo.module.css";
import { useEffect } from "react";
/* ----------------------------------- MUI ---------------------------------- */
import {
  Button,
  Stack,
  Autocomplete,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { TextField } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useEquipos } from "@/hooks/useEquipos";
import { AcordionEquipo } from "@/components/AcordionEquipo";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEventoById } from "@/services/eventos";
/* ----------------------------------- MUI ---------------------------------- */
// import { DateTime } from "luxon";

export default function GestionEventoDep() {
  const { equipos } = useEquipos();
  const { eventoId } = useParams();
  const [evento, setEvento] = useState({});
  const [equiposBD, setEquiposBD] = useState([]);
  console.log({ eventoId });

  useEffect(() => {
    fetchEventoById(eventoId)
      .then((evento) => {
        console.log({ evento });
        setEvento(evento);
        setEquiposBD(
          evento.equipos.map((equipo) => {
            return {
              id: equipo.id,
              label: equipo.nombre,
            };
          })
        );
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  //Funcion para crear el código de acceso, creo que debería ir en crear evento deportivo, no en la gestión.
  function randomString(length, chars) {
    //Yo creo lo de generar código deberia ir en crear evento no en gestionm, porque el codigo cambiaria. ¿?
    let mask = "";
    if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
    if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (chars.indexOf("#") > -1) mask += "0123456789";
    if (chars.indexOf("!") > -1) mask += "!@#$%&*?/";
    let result = "";
    for (let i = length; i > 0; --i)
      result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }

  const codigoAcceso = randomString(16, "#aA!");
  //console.log(randomString(16, "#aA!"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPago, setOpenPago] = useState(false);
  const handleOpenPago = () => setOpenPago(true);
  const handleClosePago = () => setOpenPago(false);
  //const [fechaNacimiento, setFechaNacimiento] = useState(DateTime.now());

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "0px solid #000",
    boxShadow: 24,
    p: 5,
  };

  const canchas = [
    { label: "Cancha A", id: 1 },
    { label: "Cancha B", id: 2 },
    { label: "Cancha C", id: 3 },
    { label: "Cancha D", id: 4 },
    { label: "Cancha E", id: 5 },
    { label: "Cancha F", id: 6 },
    { label: "Cancha G", id: 7 },
    { label: "Cancha H", id: 8 },
    { label: "Cancha I", id: 9 },
    { label: "Cancha J", id: 10 },
  ];

  return (
    <>
      <section className="container mx-auto py-2">
        <div className={styles.container}>
          <h1>Gestión evento deportivo</h1>
          <div className={styles.rectangle}>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  id="sports-event-name"
                  label="Nombre"
                  margin="normal"
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  disabled
                  id="sports-event-sp"
                  label="Deporte"
                  margin="normal"
                  // InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  disabled
                  id="sports-event-type"
                  label="Tipo de evento"
                  margin="normal"
                  // InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  disabled
                  id="sports-event-format"
                  label="Formato para la la liga o torneo"
                  margin="normal"
                  // InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  disabled
                  id="monto-pagar-jugadores"
                  label="Monto a pagar por jugadores"
                  margin="normal"
                  // InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  // disabled
                  id="sports-event-format"
                  label="Código de acceso"
                  margin="normal"
                  defaultValue={evento.uuid}
                  // InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={styles.divButtonA}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={handleOpenPago}>
                  Registrar pago
                </Button>
                <Button variant="contained" onClick={handleOpen}>
                  Crear partido
                </Button>
              </Stack>
              <Modal
                open={openPago}
                onClose={handleClosePago}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                  >
                    Registrar pago del evento
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Aqui se ingresan los datos del pago del evento
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className={styles.flexContainer}>
                      <TextField
                        fullWidth
                        id="sports-event-pay"
                        label="Monto a pagar"
                        margin="normal"
                        type="number"
                        // InputLabelProps={{ shrink: true }}
                      />

                      <TextField
                        fullWidth
                        id="sports-event-pay"
                        label="Concepto del pago"
                        margin="normal"
                        // InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <div className={styles.flexContainer}>
                      <TextField
                        fullWidth
                        id="sports-event-pay"
                        label="Fecha de pago"
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                      />

                      <TextField
                        fullWidth
                        id="sports-event-pay"
                        label="Forma de pago"
                        margin="normal"
                        // InputLabelProps={{ shrink: true }}
                      />
                    </div>
                    <TextField
                      fullWidth
                      id="sports-event-pay"
                      label="Notas"
                      margin="normal"
                      multiline
                      rows={4}
                      // InputLabelProps={{ shrink: true }}
                    />
                    <div className={styles.buttons}>
                      <div>
                        <Button variant="contained">Ingresar</Button>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={handleClosePago}
                        >
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  </Typography>
                </Box>
              </Modal>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                  >
                    Crear partido
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Para crear un partido en este evento deportivo, por favor
                    ingrese los siguientes datos:
                  </Typography>
                  <div>
                    <div className={styles.inputModal}>
                      <Stack direction="row" spacing={10}>
                        <Autocomplete
                          fullWidth
                          // margin="normal"
                          id="evento-actual"
                          //sx={{ width: 1000 }}
                          // options={usuarios.map((option) => option.title)}
                          options={equiposBD}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Equipo A participante"
                            />
                          )}
                        />
                      </Stack>
                    </div>
                    <div className={styles.inputModal}>
                      <Stack direction="row" spacing={10}>
                        <Autocomplete
                          fullWidth
                          id="evento-actual"
                          //sx={{ width: 1000 }}
                          // options={usuarios.map((option) => option.title)}
                          options={equiposBD}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Equipo B participante"
                            />
                          )}
                        />
                      </Stack>
                    </div>
                    <div className={styles.inputModalDH}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Día del partido"
                          inputFormat="DD/MM/YYYY"
                          sx={{ width: 505 }}
                          // value={fechaNacimiento}
                          // onChange={(newValue) => setFechaNacimiento(newValue)}
                          renderInput={(params) => (
                            <TextField {...params} sx={{ width: "100%" }} />
                          )}
                        />
                      </LocalizationProvider>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          label="Hora del partido"
                          sx={{ width: 505 }}
                          // value={value}
                          // onChange={handleChange}
                          renderInput={(params) => (
                            <TextField {...params} sx={{ width: "100%" }} />
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                    <div className={styles.inputModal}>
                      <Stack direction="row" spacing={10}>
                        <Autocomplete
                          fullWidth
                          id="evento-actual"
                          //sx={{ width: 1000 }}
                          // options={usuarios.map((option) => option.title)}
                          options={canchas}
                          renderInput={(params) => (
                            <TextField {...params} label="Cancha" />
                          )}
                        />
                      </Stack>
                    </div>
                    <Stack
                      direction="row"
                      spacing={2}
                      className={styles.buttonsModal}
                    >
                      <Button variant="contained" color="error">
                        Cancelar
                      </Button>
                      <Button variant="contained">Aceptar</Button>
                    </Stack>
                  </div>
                </Box>
              </Modal>
            </div>
            <Stack direction="column" spacing={2} className={styles.equipos}>
              <AcordionEquipo />
            </Stack>
            <div className={styles.buttons}>
              <div>
                <Button variant="contained">Ingresar</Button>
              </div>
              <div>
                <Button variant="contained" color="error" onclick={handleClose}>
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
