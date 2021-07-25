const express = require("express");
const router = express.Router();

//Rota de apresentação do projeto pedido no regra de negócio
router.get("/", (request, response) => {
  response.status(200).json({
    titulo: "To-do API",
    verison: "1.0.0",
    mensagem: "Bem vinda(o)!"
  });
});

module.exports = router;