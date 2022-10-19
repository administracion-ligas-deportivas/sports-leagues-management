import {Link} from "react-router-dom";
import styles from "./Button.module.css";

/**
 * Botón que puede ser una etiqueta button o un anchor (a) dependiendo de los
 * atributos que reciba. Esto nos permite crear enlaces a otras páginas de forma
 * semántica con un anchor y crear botones con button, aprovechando las
 * capacidades de cada etiqueta.
 */
export default function Button({
  variant = "primary",
  disabled = false,
  inverse = false,
  value = "",
  classNames = [],
  isSpaLink = false,
  href = "",
  target = "_blank",
  type = "button",
  onClick = "",
  children,
}) {
  const allClassNames = [
    ...classNames,
    styles.button,
    styles[variant],
    // Si inverse es verdadero, lo agrega. Si no, hace corto circuito.
    inverse && styles.inverse,
  ].join(" ");

  // Link de Single Page App, pero que no ha sido especificado en el prop, por
  // lo que vemos si se está referenciando a una ruta dentro del mismo sitio web
  // o no.
  let isNotSpecifiedSpaLink = false;

  if (!isSpaLink) {
    // Si la ruta comienza con una diagonal (/) y no es la ruta API, se trata de
    // un Link SPA. Esto solo se evalúa si no se indicó ese prop en el componente.
    isNotSpecifiedSpaLink = href.startsWith("/") && !href.includes("/api");
  }

  const CustomTag =
    isSpaLink || isNotSpecifiedSpaLink || href ? "a" : "button";

  const attributes = {
    general: { disabled, className: allClassNames },
    anchor: { href, target, rel: "noopener noreferrer" },
    button: { type, value , onClick},
  };

  // Si es un componente Link de Next.js, el anchor (a) no necesita ningún
  // atributo. De no ser así y ser un enlace normal, si necesita dichos
  // atributos.
  const isNormalLink = !isSpaLink && !isNotSpecifiedSpaLink && href;

  const tagAttributes = {
    ...(CustomTag === "button" && attributes.button),
    // Si no es un Link de SPA, agregamos sus atributos.
    ...(isNormalLink && attributes.anchor),
    ...attributes.general,
  };

  if (isSpaLink || isNotSpecifiedSpaLink) {
    return (
      <Link
        href={href}
        passHref
      >
        <CustomTag {...tagAttributes}>{children}</CustomTag>
      </Link>
    );
  }

  return <CustomTag {...tagAttributes}>{children}</CustomTag>;
}