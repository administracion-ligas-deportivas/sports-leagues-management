const addScopes = (model, scopesToInclude) => {
  scopesToInclude.forEach((currentScope) => {
    const { name, scope } = currentScope;
    model.addScope(name, scope);
  });
};

module.exports = { addScopes };
