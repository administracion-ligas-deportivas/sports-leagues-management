import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Jugador({ playerName = "Nombre del jugador" }) {
  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        fontFamily: "Helvetica",
        fontSize: 18,
        margin: "auto",
      }}
    >
      <div>
        <Link href="/">
          <a>{playerName}</a>
        </Link>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faUser}
          style={{ height: 15, margin: 5, marginLeft: 15 }}
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ height: 15, margin: 5, marginLeft: 15, color: "red" }}
        />
      </div>
    </div>
  );
}

export default Jugador;
