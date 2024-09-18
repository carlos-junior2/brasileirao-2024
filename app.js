import tabela2024 from './tabela.js';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(tabela2024);
});

app.get('/:sigla', (requisicao, resposta) => {
    var s = requisicao.params.sigla.toUpperCase();
    const time = tabela2024.find(infoTime => infoTime.sigla === s);
    if (!time){
        resposta.status(404).send('Este time não está na Serie A do Brasileirão');
    return;
    }
    resposta.status(200).send(time);
});

app.put('/:sigla', (req, res) => {
    const s = req.params.sigla.toUpperCase();
    const timeSelecionado = tabela2024.find(t => t.sigla === s);
    const campos = Object.keys(req.body);
    for(let campo of campos){
        timeSelecionado[campo] = req.body[campo];
    }
    res.status(200).send(timeSelecionado);
});

app.listen(300, () => console.log("servidor rodando com sucesso"));