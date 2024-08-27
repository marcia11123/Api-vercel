import express from express;

import { montadoras,veiculos } from "./dados";

const app = express();

app.get('/veciculos', (req,res)=>{
    res.json(veiculos)
})

app.get('/montadoras', (req,res)=>{
    res.json(montadoras);
})

const PORT = 3030;
app.listen(PORT,()=>{
    console.log('Sistema inicializando: ' , 'Acesso: http://localhost')
});