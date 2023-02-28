import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEventos, useModal } from "@/hooks";
import { AcordionEquipo } from "@/components/AcordionEquipo";
import { CreateMatchModal } from "@/components";
import { GestionTorneoStyles } from "@/styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { eventosService, partidosService } from "@/services";
import dayjs from "dayjs";

export default function GestionEventoDep() {
  const { eventoId } = useParams();

  const { evento, isLoadingEvento } = useEventos(eventoId);

  const { 
    isOpen: isCanchasOpen, 
    handleClose: handleCloseCanchas, 
    handleOpen: handleOpenCanchas 
  } = useModal();

  const {
    isOpen: isPagoOpen,
    handleClose: handleClosePago,
    handleOpen: handleOpenPago,
  } = useModal();

  const [deporteEvento, setDeporteEvento] = useState();

  useEffect(() => {
    setDeporteEvento(
      eventosService.getDeporteEvento(evento)
    );
  }, [evento]);

  // const [fechaNacimiento, setFechaNacimiento] = useState(DateTime.now());

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

  return (
    <section className="container mx-auto py-2">
      <div className={GestionTorneoStyles.container}>
        <h1>Gestión evento deportivo</h1>
        {
          isLoadingEvento ? (
            <div>Cargando...</div>
          ) : (
            <div className={GestionTorneoStyles.rectangle}>
              <div className={GestionTorneoStyles.flexContainer}>
                <div className={GestionTorneoStyles.input}>
                  <TextField
                    fullWidth
                    id="sports-event-name"
                    label="Nombre"
                    margin="normal"
                    value={evento?.nombre}
                    InputLabelProps={{ shrink: true }}

                  />
                </div>
                <div className={GestionTorneoStyles.input}>
                  <TextField
                    fullWidth
                    id="sports-event-sp"
                    label="Deporte"
                    margin="normal"
                    value={deporteEvento}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={GestionTorneoStyles.flexContainer}>
                <div className={GestionTorneoStyles.input}>
                  <TextField
                    fullWidth
                    id="sports-event-type"
                    label="Tipo de evento"
                    margin="normal"
                    value={evento?.formatoEventoDeportivo?.tipoEventoDeportivo?.nombre}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={GestionTorneoStyles.input}>
                  <TextField
                    fullWidth
                    id="sports-event-format"
                    label="Formato para la la liga o torneo"
                    margin="normal"
                    value={evento?.formatoEventoDeportivo?.nombre}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={GestionTorneoStyles.flexContainer}>
                <div className={GestionTorneoStyles.input}>
                  <TextField
                    fullWidth
                    id="monto-pagar-jugadores"
                    label="Monto a pagar por jugadores"
                    margin="normal"
                    value={evento?.descripcionPagos ?? "No se especificó una descripción de los pagos"}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <div className={GestionTorneoStyles.input}>
                  <TextField
                    fullWidth
                    id="sports-event-format"
                    label="Código de acceso"
                    margin="normal"
                    value={evento?.uuid}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className={GestionTorneoStyles.divButtonA}>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" onClick={handleOpenPago}>
                  Registrar pago
                  </Button>
                  <Button variant="contained" onClick={handleOpenCanchas}>
                  Crear partido
                  </Button>
                </Stack>
                <Modal
                  open={isPagoOpen}
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
                      <div className={GestionTorneoStyles.flexContainer}>
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
                      <div className={GestionTorneoStyles.flexContainer}>
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
                      <div className={GestionTorneoStyles.buttons}>
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
                
                <CreateMatchModal isOpen={isCanchasOpen} handleClose={handleCloseCanchas} evento={evento} />
              
              </div>
              <Stack direction="column" spacing={2} className={GestionTorneoStyles.equipos}>
                <Typography variant="h5" component="h2">
                  Partidos
                </Typography>
                <div style={{
                  display: "flex",
                  gap: ".5rem",
                }}>
                  {
                    evento?.partidos?.length === 0 ? "No hay partidos registrados" : evento?.partidos?.map((partido) => {
                      return (
                        <Card key={partido.id} sx={{ width: "480px" }}>
                          <CardContent>
                            <Typography variant="h6" component="div">
                              {partidosService.getEquiposStringInPartido(partido)}
                            </Typography>
                            <div>
                              <b>Deportivo: </b> {partido?.cancha?.deportivo?.nombre}
                            </div>
                            <div>
                              <b>Cancha: </b> {`#${partido?.cancha?.numero} ${partido?.cancha?.nombre}`}
                            </div>
                            
                            <div style={{
                              marginBlock: "1rem"
                            }}>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <div><b>Estadistico:</b> {`${partido?.estadistico?.nombre} ${partido?.estadistico?.apellido}`}</div>
                                <div><b>Fecha:</b> {dayjs(partido?.fecha).format("DD-MM-YYYY")}</div>
                                <div><b>Realizado:</b> {partido?.efectuado ? "Sí" : "No"}</div>
                                <div><b>Cancelado:</b> {partido?.cancelado ? "Sí" : "No"}</div>
                              </Typography>
                            </div>
                            <Typography variant="body2">
                              {partido?.notas}
                            </Typography>
                          </CardContent>
                          {/* <CardActions>
                            <Button size="small">Learn More</Button>
                          </CardActions> */}
                        </Card>
                      );
                    })
                  }
                </div>
              </Stack>
              <Stack direction="column" spacing={2} className={GestionTorneoStyles.equipos}>
                <Typography variant="h5" component="h2">
                  Equipos
                </Typography>
                <AcordionEquipo />
              </Stack>
              <div className={GestionTorneoStyles.buttons}>
                <div>
                  <Button variant="contained">Ingresar</Button>
                </div>
                <div>
                  <Button variant="contained" color="error" onClick={handleCloseCanchas}>
                  Cancelar
                  </Button>
                </div>
              </div>
            </div>
          )
        }
          
      </div>
    </section>
  );
}
