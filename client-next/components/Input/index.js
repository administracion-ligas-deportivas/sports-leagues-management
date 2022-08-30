import styles from "./Input.module.css";

export default function Input({
  id = "",
  name = "",
  type = "text",
  title = "",
  placeholder = "",
  readOnly = false,
  disabled = false,
  className,
}) {
  const classNames = className
    ? [...className, styles.input].join(" ")
    : styles.input;

  return (
    <input
      name={name}
      id={id}
      type={type}
      title={title}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      className={classNames}
    />
  );
}
