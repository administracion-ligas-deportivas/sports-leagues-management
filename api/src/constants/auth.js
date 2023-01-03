const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;
const DAYS = 7;

const SALT_ROUNDS = 10;
// 7 días - Que cada 7 días se tenga que volver a loguear.
//
// -> 60 seconds * 60 minutes * 24 hours * 7 days
//
// El resultado son los segundos que durará la sesión. Es decir, 7 días
// (obtenidos en segundos).
const JWT_EXPIRATION_DATE = [SECONDS, MINUTES, HOURS, DAYS].reduce(
  (acc, curr) => acc * curr
);

module.exports = {
  SALT_ROUNDS,
  JWT_EXPIRATION_DATE,
};
