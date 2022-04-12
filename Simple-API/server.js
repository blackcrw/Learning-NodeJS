const http = require("http");

const routes = {
    "/": "Curso de Node",
    "/livros": "Lista de Livros",
    "/autores": "Lista de Autores",
    "/editora": "Página da Editora"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end(routes[req.url])
})

server.listen(3000, () => {
    console.log("Servidor escutando em http://127.0.0.1:3000")
})