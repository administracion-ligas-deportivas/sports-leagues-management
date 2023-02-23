const { PATH_KEYS, DB_CONFIG_BASE_PATH } = require("#src/constants/index.js");

const getSequelizePathsByKeys = () => {
  const paths =  PATH_KEYS.map((pathKey) => {
    // Obtener el path del que vamos a obtener la dirección. P.ej: models,
    // seeders, migrations
    const path = pathKey.split("-")[0];

    // { 'models-path': 'src/models' }
    return { [pathKey]: `${DB_CONFIG_BASE_PATH}/${path}` };
  });

  return Object.assign({}, ...paths);
};

export { getSequelizePathsByKeys };
