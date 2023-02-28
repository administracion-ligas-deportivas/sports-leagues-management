import { 
  Autocomplete, 
  Box, 
  Button, 
  Modal, 
  Stack, 
  TextField, 
  Typography 
} from "@mui/material";
import { 
  DatePicker,
  TimePicker
} from "@mui/x-date-pickers";

import { 
  useCanchas,
  useCustomForm
} from "@/hooks";
import { useEffect, useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DEFAULT_MODAL_STYLES } from "@/constants";
import { GestionTorneoStyles } from "@/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { REGISTER_MATCH_FIELDS } from "@/constants/forms/partidos";
import { partidosService } from "@/services";
import { registerPartidoSchema } from "@/validations";

export function CreateMatchModal({ isOpen, handleClose, evento }) {
  const { 
    setValue,
    watch,
    registerField,
    handleSubmit,
    setFieldErrors,
    getValues,
  } = useCustomForm(registerPartidoSchema);
  const { canchas } = useCanchas();

  const [estadisticosRows, setEstadisticosRows] = useState([]);
  const [canchasRows, setCanchasRows] = useState([]);
  const [equiposRows, setEquiposRows] = useState([]);
  const [availableLocalTeams, setAvailableLocalTeams] = useState([]);
  const [availableVisitorTeams, setAvailableVisitorTeams] = useState([]);

  const watchedEquipoLocalId = watch(REGISTER_MATCH_FIELDS.localId.name);
  const watchedEquipoVisitanteId = watch(
    REGISTER_MATCH_FIELDS.visitanteId.name
  );

  const registerPartido = (data) => {
    console.log({ data });
    
    partidosService
      .createPartido({ 
        ...data,
        eventoId: evento?.id
      })
      .then((response) => {
        if (response?.error) {
          alert("Error al crear el partido");
          return;
        }

        alert("Partido creado exitosamente");
        console.log({ response });
      })
      .catch((error) => {
        alert("Error al crear el partido");
        console.log({ error });
      });
  };

  useEffect(() => {
    setEquiposRows(
      evento?.equipos?.map((equipo) => {
        return {
          id: equipo.id,
          label: equipo.nombre,
        };
      })
    );
  }, [evento]);

  useEffect(() => {
    setEstadisticosRows(
      evento?.estadisticos?.map((estadistico) => {
        const fullName = `${estadistico.nombre} ${estadistico.apellido}`;
        return {
          id: estadistico.id,
          label: fullName,
        };
      })
    );
  }, [evento]);

  useEffect(() => {
    setCanchasRows(
      canchas?.map(({ id, nombre, numero, deportivo }) => {
        const nombreCancha = `#${numero} ${nombre} | ${deportivo?.nombre}`;

        return {
          id,
          nombre: nombreCancha,
          numero,
        };
      }));
  }, [canchas]);

  useEffect(() => {
    setAvailableLocalTeams(
      equiposRows?.filter((equipo) => {
        return equipo.id !== watchedEquipoVisitanteId;
      })
    );
  }, [equiposRows, watchedEquipoVisitanteId]);

  useEffect(() => {
    setAvailableVisitorTeams(
      equiposRows?.filter((equipo) => {
        return equipo.id !== watchedEquipoLocalId;
      })
    );
  }, [equiposRows, watchedEquipoLocalId]);

  useEffect(() => {
    console.log({ canchasRows, equiposRows, availableLocalTeams, availableVisitorTeams, watchedEquipoLocalId, watchedEquipoVisitanteId });
    console.log({ values: getValues() });
  }, [ canchasRows, equiposRows, availableLocalTeams, availableVisitorTeams, watchedEquipoLocalId, watchedEquipoVisitanteId ]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={DEFAULT_MODAL_STYLES}>
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
        <form
          onSubmit={handleSubmit(registerPartido)}
        >
          <div className={GestionTorneoStyles.inputModal}>
            <Stack direction="row" spacing={10}>
              <Autocomplete
                fullWidth
                {...registerField(
                  REGISTER_MATCH_FIELDS.estadisticoId.name,
                  { setErrors: false }
                )}
                onChange={(event, newValue) => {
                  setValue(
                    REGISTER_MATCH_FIELDS.estadisticoId.name,
                    newValue?.id
                  );
                }}
                options={estadisticosRows}
                getOptionLabel={(option) => option?.label}
                renderInput={(params) => (
                  <TextField
                    label={REGISTER_MATCH_FIELDS.estadisticoId.label}
                    {...params}
                    {...setFieldErrors(
                      REGISTER_MATCH_FIELDS.estadisticoId.name
                    )}
                  />
                )}
              />
            </Stack>
          </div>
          <div className={GestionTorneoStyles.inputModal}>
            <Stack direction="row" spacing={10}>
              <Autocomplete
                fullWidth
                {...registerField(
                  REGISTER_MATCH_FIELDS.localId.name,
                  { setErrors: false }
                )}
                onChange={(event, newValue) => {
                  setValue(
                    REGISTER_MATCH_FIELDS.localId.name,
                    newValue?.id
                  );
                }}
                options={availableLocalTeams}
                getOptionLabel={(option) => option?.label}
                renderInput={(params) => (
                  <TextField
                    label={REGISTER_MATCH_FIELDS.localId.label}
                    {...params}
                    {...setFieldErrors(
                      REGISTER_MATCH_FIELDS.localId.name
                    )}
                  />
                )}
              />
            </Stack>
          </div>
          <div className={GestionTorneoStyles.inputModal}>
            <Stack direction="row" spacing={10}>
              <Autocomplete
                fullWidth
                {...registerField(
                  REGISTER_MATCH_FIELDS.visitanteId.name,
                  { setErrors: false }
                )}
                onChange={(event, newValue) => {
                  setValue(
                    REGISTER_MATCH_FIELDS.visitanteId.name,
                    newValue?.id
                  );
                }}
                options={availableVisitorTeams}
                getOptionLabel={(option) => option?.label}
                renderInput={(params) => (
                  <TextField
                    label={REGISTER_MATCH_FIELDS.visitanteId.label}
                    {...params}
                    {...setFieldErrors(
                      REGISTER_MATCH_FIELDS.visitanteId.name
                    )}
                  />
                )}
              />
            </Stack>
          </div>
          <div className={GestionTorneoStyles.inputModalDH}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                inputFormat="DD/MM/YYYY"
                sx={{ width: 505 }}
                {...registerField(
                  REGISTER_MATCH_FIELDS.fecha,
                )}
                onChange={(newValue) => { 
                  setValue(
                    REGISTER_MATCH_FIELDS.fecha.name,
                    newValue
                  );
                }}
                value={watch(REGISTER_MATCH_FIELDS.fecha.name)}
                // value={fechaNacimiento}
                // onChange={(newValue) => setFechaNacimiento(newValue)}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "100%" }} />
                )}
              />
            </LocalizationProvider>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                {...registerField(
                  REGISTER_MATCH_FIELDS.hora,
                )}
                sx={{ width: 505 }}
                // value={value}
                // onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "100%" }} />
                )}
              />
            </LocalizationProvider> */}
          </div>
          <div className={GestionTorneoStyles.inputModal}>
            <Autocomplete
              fullWidth
              {
                ...registerField(
                  REGISTER_MATCH_FIELDS.canchaId.name,
                  { setErrors: false }
                )
              }
              onChange={(event, newValue) => {
                setValue(
                  REGISTER_MATCH_FIELDS.canchaId.name,
                  newValue?.id
                );
              }}
                
              // sx={{ width: 1000 }}
              // options={usuarios.map((option) => option.title)}
              options={canchasRows}
              getOptionLabel={((option) => option.nombre)}
              renderInput={(params) => (
                <TextField 
                  {...params} 
                  label={REGISTER_MATCH_FIELDS.canchaId.label} 
                  margin="normal"
                  {
                    ...setFieldErrors(
                      REGISTER_MATCH_FIELDS.canchaId.name
                    )
                  } 
                />
              )}
            />
          </div>
          <Stack
            direction="row"
            spacing={2}
            className={GestionTorneoStyles.buttonsModal}
          >
            <Button variant="contained" color="error" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="contained" type="submit">Aceptar</Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
