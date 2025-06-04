const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifieldTopology: true
        });
        console.log("MongoDB conectado com sucesso");
    }
    catch {
        console.error("Erro ao conectar com o banco de dados Mongo");
        process.exit(1);
    }
}

module.exports = connectToMongoDB;