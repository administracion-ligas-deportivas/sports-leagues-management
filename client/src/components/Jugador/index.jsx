import * as React from "react";

/*----------------------MUI----------------------------*/
import { InputLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import Link from '@mui/material/Link';
/*-----------------------------------------------------*/

function Jugador({ playerName }) {
  return (
    <div>
      {playerName}
      <IconButton aria-label="delate">
        <CancelIcon />
      </IconButton>
    </div>
  );
}

export default Jugador;
