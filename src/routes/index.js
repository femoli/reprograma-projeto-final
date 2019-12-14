const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Troca comigo?",
    description: "Essa API foi construída para conectar as pessoas que possuem livros em bom estado e querem trocar por outros. Além disso, é também para doarem livros para outros usuários de baixa renda que estão estudando, seja na faculdade ou para o vestibular.",
    version: "1.0.0"
  })
})

module.exports = router