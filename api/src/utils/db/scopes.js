const addScopes = (model, scopesToInclude) => {
  scopesToInclude.forEach((currentScope) => {
    const { name, scope } = currentScope;
    model.addScope(name, scope);
  });
};

/**
 * Inicializar los scopes de un modelo de Sequelize.
 *
 * @param {Model} model Modelo al que se le añadirán los scopes.
 * @param {Model[]} models Array de modelos de `Sequelize`. Se necesitan enviar
 * porque este método se ejecuta en `model.associate = (models) => {}`, y en ese
 * momento no se puede acceder a los modelos importándolos.
 * @param {Function} getModelScopesFunction Función que devuelve los scopes que
 * se van a incluir. Todos los callbacks deben de devolver un arreglo llamado
 * `SCOPES_TO_INCLUDE` con los scopes que se van a incluir. Cada scope debe de
 * tener las propiedades `name` y `scope`.
 */
const initModelScopes = (model, models, getModelScopesFunction) => {
  const { SCOPES_TO_INCLUDE } = getModelScopesFunction(models);

  if (!SCOPES_TO_INCLUDE) {
    throw new Error(`No se encontraron scopes para el modelo "${model.name}".`);
  }

  addScopes(model, SCOPES_TO_INCLUDE);
};

module.exports = { addScopes, initModelScopes };
