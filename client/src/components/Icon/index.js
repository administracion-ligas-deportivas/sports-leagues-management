//  import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./Icon.module.css";

export default function UserIcon() {
  return (
    <div className={styles.userIconDiv}>
      <FontAwesomeIcon
        icon={faUserPen}
        className={styles.userIcon}
      />
    </div>
  );
}
