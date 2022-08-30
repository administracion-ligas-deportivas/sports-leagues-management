import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Label from "../Label";
import DropdownLink from "./DropdownLink";

import styles from "./Dropdown.module.css";

export default function DropdownList({ title, children, ...props }) {
  // let rotateIcon = false;
  return (
    <div className={styles.dropdownContainer}>
      <button
        type="button"
        className={styles.dropdownButton}
        // onMouseOver={(rotateIcon = true)}
        // onFocus={(rotateIcon = true)}
        // onMouseOut={(rotateIcon = false)}
        // onBlur={(rotateIcon = false)}
      >
        <Label {...props}>{title}</Label>
        <FontAwesomeIcon
          icon={faAngleDown}
          // className={rotateIcon ? "fa-rotate-180" : ""}
        />
      </button>
      <ul className={styles.dropdownList}>
        {children.map((element) => DropdownLink(element))}
      </ul>
    </div>
  );
}
