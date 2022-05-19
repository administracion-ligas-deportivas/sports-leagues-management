function OldInput({ id }) {
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
      {/* 
        <form> 

        El input irá dentro de cualquier formulario, por lo que no hay que 
        definirlo aquí, sino utilizar este componente dentro de otros 
        formularios.
      */}
      {/* 

      Aquí se tuvo que hacer uso de las 2 reglas para el input y el label:
      
      - Tener un htmlFor en label que concuerde con el id del input
      - Tener el input dentro del label.

      Esto se puede encontrar en la documentación oficial y en un Issue de 
      GitHub. Por lo visto, es porque Airbnb implementó estas reglas de esta 
      manera.

      - https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/718
      - https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md#case-i-just-want-a-text-label-associated-with-an-input 
      */}
      <label htmlFor={id}>
        {/* OldInput */}
        <input
          type="text"
          name="input"
          id={id}
          style={{
            border: "1px solid rgb(26, 28, 158)",
            borderRadius: 10,
            backgroundColor: "rgb(238, 238, 252)",
          }}
        />
      </label>
      {/* </form> */}
    </div>
  );
}

export default OldInput;
