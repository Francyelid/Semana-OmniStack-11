const express = require('express');

const app = express();

app.get('/users', (request, response) => {
    return response.json({
        evento: 'semana omnistack',
        aluno: 'eu'
    });
});

app.listen(3333);