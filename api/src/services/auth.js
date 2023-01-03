const bcrypt = require("bcrypt");

const isPasswordCorrect = async (user, password) => {
  if (!user) return false;

  return await bcrypt.compare(password, user?.password);
};

const authService = {
  isPasswordCorrect,
};

module.exports = {
  authService,
};
