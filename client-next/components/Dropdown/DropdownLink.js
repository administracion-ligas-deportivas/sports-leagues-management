import Link from "next/link";
import styles from "./Dropdown.module.css";

export default function DropdownLink({ title, href }) {
  return (
    <li className={styles.dropdownLink}>
      <Link
        href={href}
        passHref
      >
        <a href="dummy-ref">{title}</a>
      </Link>
    </li>
  );
}
