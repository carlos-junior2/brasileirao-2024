import tabela2024 from './tabela.js';
import express from 'express';

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send(tabela2024);
});

app.get('/:sigla', (requisicao, resposta) => {
    var s = requisicao.params.sigla.toUpperCase();
    const time = tabela2024.find(infoTime => infoTime.sigla === s);
    resposta.send(time);
})

app.listen(300, () => console.log("servidor rodando com sucesso"));