const { json, urlencoded } = require("express");
const cors = require("cors");
const helmet = require("helmet");

// função que configura o express 
const configureExpress = (app) => {
    app.use(helmet());
    app.use(cors());
    app.use(json());
    app.use(urlencoded({ extended: true }));

    // rotas
    app.use("/api", require("../routes"));

    return app;
}

module.exports = configureExpress;