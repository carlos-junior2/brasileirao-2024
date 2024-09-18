import tabela2024 from './tabela.js';
import express from 'express';

const app = express();

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

app.listen(300, () => console.log("servidor rodando com sucesso"));