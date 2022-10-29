# Migración de CRA (Create React App) a Vite

Migramos de CRA a Vite para mejorar nuestra experiencia de desarrollo y utilizar
tecnologías más modernas.

## Extensiones de componentes `.js` a `.jsx`

Para realizar la migración fue necesario cambiar la extensión de los componentes
de `.js` a `.jsx` ya que Vite no soporta la extensión `.js` para los
componentes.

Como eran tantos archivos dentro de subdirectorios, utilicé un comando para
`cmd`de Windows (no `powershell`) para realizar el cambio de extensión:

```bash
for /R %x in (*.js) do ren "%x" *.jsx
```

Para cambiar solo un archivo de extensión, utilizaríamos.

```bash
# Reemplazar XXX y YYY por las respectivas extensiones.
ren *.XXX *.YYY

# Esto es lo que haríamos nosotros.
ren nombre-archivo.js nombre-archivo.jsx
```

> **Fuente**:
> [Changing all files' extensions in a folder with one command on Windows](https://stackoverflow.com/a/9885274/13562806)

## Fuentes

- [Migrating from Create React App (CRA) to Vite](https://cathalmacdonnacha.com/migrating-from-create-react-app-cra-to-vite)
- [Use Vite for React Apps instead of CRA](https://dev.to/nilanth/use-vite-for-react-apps-instead-of-cra-3pkg)
- [Changing all files' extensions in a folder with one command on Windows](https://stackoverflow.com/a/9885274/13562806)
