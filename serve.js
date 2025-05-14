const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const filmes = [
  { id: 1, titulo: "O Poderoso Chefão", genero: "Crime", ano: 1972 },
  { id: 2, titulo: "Interestelar", genero: "Ficção Cientifica", ano: 2014 },
  { id: 3, titulo: "A Origem", genero: "Ação", ano: 2010 },
  { id: 4, titulo: "Vingadores", genero: "Super-herói", ano: 2019 },
  { id: 5, titulo: "Parasita", genero: "Drama", ano: 2019 },
];

app.get('/filmes', (req, res) => {
  res.json(filmes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
