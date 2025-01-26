const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// JSON que será retornado
const data = [
  {
    "id": "1",
    "nome": "Professor João",
    "email": "professor.joao@example.com",
    "tipo": "professor",
    "turmas": [
      {
        "id": 161,
        "cod": "161.2025.1",
        "nome": "Advanced",
        "cargaHoraria": 40,
        "horaAula": 3,
        "dataInicio": "2024-01-01",
        "dataFim": "2024-03-01",
        "unidadeOperativa": "Unidade Central",
        "ciclos": [
          {
            "id": 1,
            "nome": "Ciclo 1",
            "avaliacoes": [
              {
                "tipo": "Avaliação de Classe",
                "notas": {
                  "tarefas": 1.3,
                  "livroDeExercicios": 1.2,
                  "interacao": 1.8,
                  "progresso": 2.4,
                  "expressao": 2.3
                },
                "resultadoFinal": 9.0
              },
              {
                "tipo": "Avaliação Oral",
                "notas": {
                  "fluencia": 4.5,
                  "precisao": 4.8,
                  "vocabulario": 4.7,
                  "pronuncia": 4.6
                },
                "resultadoFinal": 9.3
              },
              {
                "tipo": "Avaliação Escrita",
                "notas": {
                  "usoDeIngles": 9.0,
                  "leitura": 8.5,
                  "compreensao": 9.0,
                  "escrita": 8.0
                },
                "resultadoFinal": 8.63
              }
            ]
          }
        ]
      }
    ]
  }
];

// Rota para retornar o JSON
app.get('/dados', (req, res) => {
  res.json(data);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
