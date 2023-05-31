//Importação do módulo express
const express = require("express");

//Instâncando o express como app
const app = express();

//Definir que o express deve lidar com conteúdos em json
/*
    Json -> JS(JavaScript) O(On) n(Notation)
    é uma notação em javascriptm ou seja, uma forma estruturada de transitar com os dados,
    enviando para o servidor ou para o usuário. É uma forma de trocar dados entre 
    cliente-servidor usando objetos javascript. Ex:
    lstProdutos:[
        {
            id:18
            nome:"Mouse"
        }
        {
            id:75
            nome:"Sofá"
        }
    ]
 */
app.use(express.json());

//Vamos criar a primeira rota com a solicitação get
app.get("/",(req,res)=>{
    //responder ao usuário passand o status code e a mensagem
    res.status(200).send("Está é a rota raiz");
});

app.get("/clientes/listar",(req,res)=>{
    console.log(req)
    res.status(200).send(["Marcos","Sofia","Enzo"]);
});

app.post("/clientes/cadastrar",(req,res)=>{
    console.log(req)
    res.status(201).send({rs:"Veja os dados enviados",dados:req.body});
});

app.listen(5062,()=>console.log("Servidor online: http://127.0.0.1:5062"));