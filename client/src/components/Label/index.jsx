import styles from "./Label.module.css";

export default function Label({ content, htmlFor, className, children }) {
  const classNames = className
    ? [...className, styles.label].join(" ")
    : styles.label;

  return (
    <label
      htmlFor={htmlFor}
      className={classNames}
    >
      {content}
      {children}
    </label>
  );
}
