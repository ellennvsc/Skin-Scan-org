const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dados temporários
let posts = [
  {
    id: 1,
    title: "Cuidados com a pele",
    imageUrl: "https://i.pinimg.com/564x/f5/f9/48/f5f948bb7b1e8c103fdff7d90a59ef7e.jpg",
    imageSetUrl: "https://i.pinimg.com/564x/88/d6/af/88d6af8d061c7aad679f1d44940a65cc.jpg 2x",
    text: "Explore nossa página dedicada aos cuidados essenciais para a sua pele, onde encontrará orientações valiosas para manter uma rotina de cuidados diários que realçam sua beleza natural.",
  },
  {
    id: 2,
    title: "Rotina personalizada",
    imageUrl: "https://i.pinimg.com/564x/88/d6/af/88d6af8d061c7aad679f1d44940a65cc.jpg",
    imageSetUrl: "https://i.pinimg.com/564x/f5/f9/48/f5f948bb7b1e8c103fdff7d90a59ef7e.jpg 2x",
    text: "Apos avaliar a foto enviada, será indicada uma rotina de cuidados com a pele de acordo com seu tipo de pele.",
  },
  {
    id: 3,
    title: "Dicas adicionais",
    imageUrl: "https://i.pinimg.com/564x/16/6b/f5/166bf5bef28ca23c8367803159433a3f.jpg",
    imageSetUrl: "https://i.pinimg.com/564x/16/6b/f5/166bf5bef28ca23c8367803159433a3f.jpg 2x",
    text: "Apos os primeiros passos, serão disponilizadas algumas dicas para complementar sua rotina de cuidados com a pele e auxiliar no seu dia a dia.",
  },
];

// Rotas da API
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Rota para adicionar um novo post
app.post("/posts", (req, res) => {
  // Gerar um novo ID para o post
  const newId = posts.length + 1;

  // Criar um novo objeto de post com o ID e os dados da requisição
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
  };

  // Adicionar o novo post ao array de posts
  posts.push(newPost);

  // Responder com o novo post
  res.json(newPost);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
