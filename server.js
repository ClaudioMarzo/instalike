import express from "express";

const posts = [
    { 
        id: 1, 
        descricao: "Gato sorrindo", 
        imagem: "https://placecats.com/millie/300/150" 
    },
    { 
        id: 2, 
        descricao: "Gato caindo", 
        imagem: "https://placecats.com/millie/300/150" 
    },
    { 
        id: 3, 
        descricao: "Gato chorando", 
        imagem: "https://placecats.com/millie/300/150" 
    },
];

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando..");
});

app.get("/pots", (req, res) =>{
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) =>{
        return post.id === Number(id)
    });
}

app.get("/pots/:id", (req, res) =>{
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});