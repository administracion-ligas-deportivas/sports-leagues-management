import { fileURLToPath } from "url";

// https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/#how-does-getting-dirname-back-work
// https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs:~:text=module.createRequire().-,No%20__filename%20or%20__dirname,-%23
const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export { __filename, __dirname };
