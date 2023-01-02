const initRouterSubroutes = (router, subroutes) => {
  subroutes.forEach((subroute) => subroute(router));
};

module.exports = { initRouterSubroutes };
