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
  onChange /*= ({target: {name, value}}) => 
  {
    console.log(name, value);
  }*/
}) {
  const classNames = className
    ? [...className, styles.input].join(" ")
    : styles.input;

  return (
    <input
      id={id}
      name={name}
      type={type}
      title={title}
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      className={classNames}
      onChange={onChange}
    />
  );
}
