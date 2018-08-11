module.exports = {
  css: [
    `./node_modules/bootstrap/dist/css/bootstrap.css`,
  ],
  head: {
    title: `Automatic SPA FTP Deploys with CircleCI`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width,initial-scale=1` },
    ],
  },
  router: {
    linkExactActiveClass: `is-active`,
  },
};
