var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  professores = [
      {
        "nome": "Cordel Alexandre",
        "disciplina": "Computação em Nuvem",
        "periodo": "3º Noite",
        "sexo": "Masculino",
        "campus": "Recife"
      },
      {
        "nome": "Joana Silva",
        "disciplina": "Inteligência Artificial",
        "periodo": "2º Manhã",
        "sexo": "Feminino",
        "campus": "Caruaru"
      },
      {
        "nome": "Marcos Oliveira",
        "disciplina": "Banco de Dados",
        "periodo": "4º Tarde",
        "sexo": "Masculino",
        "campus": "Recife"
      },
      {
        "nome": "Carla Mendes",
        "disciplina": "Desenvolvimento Web",
        "periodo": "1º Noite",
        "sexo": "Feminino",
        "campus": "Caruaru"
      },
      {
        "nome": "Ricardo Santos",
        "disciplina": "Redes de Computadores",
        "periodo": "5º Noite",
        "sexo": "Masculino",
        "campus": "Recife"
      },
      {
        "nome": "Ana Souza",
        "disciplina": "Programação Orientada a Objetos",
        "periodo": "3º Tarde",
        "sexo": "Feminino",
        "campus": "Caruaru"
      },
      {
        "nome": "Pedro Almeida",
        "disciplina": "Segurança da Informação",
        "periodo": "6º Noite",
        "sexo": "Masculino",
        "campus": "Recife"
      },
      {
        "nome": "Mariana Costa",
        "disciplina": "Engenharia de Software",
        "periodo": "4º Manhã",
        "sexo": "Feminino",
        "campus": "Caruaru"
      },
      {
        "nome": "Fernando Xavier",
        "disciplina": "Sistemas Operacionais",
        "periodo": "2º Noite",
        "sexo": "Masculino",
        "campus": "Recife"
      },
      {
        "nome": "Camila Pereira",
        "disciplina": "Linguagens de Programação",
        "periodo": "5º Tarde",
        "sexo": "Feminino",
        "campus": "Caruaru"
      }
    ]


  cols = ["Nome", "Disciplina", "Período","Sexo", "Campus"]

  res.render("index", {professores: professores, cols: cols});
});

module.exports = router;
