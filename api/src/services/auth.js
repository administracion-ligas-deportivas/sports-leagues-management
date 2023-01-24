const bcrypt = require("bcrypt");

const isPasswordCorrect = async (user, password) => {
  if (!user) return false;

  return await bcrypt.compare(password, user?.password);
};

const areCredentialsCorrect = async (user, password) => {
  return user && (await isPasswordCorrect(user, password));
};

const authService = {
  isPasswordCorrect,
  areCredentialsCorrect,
};

module.exports = {
  authService,
};
