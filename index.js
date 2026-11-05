
import express from 'express';

const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Array de times
const times = [
    {
        id: 1,
        nome: "Grêmio",
        estadio: "Arena",
        cidade: "Porto Alegre"
    },
    {
        id: 2,
        nome: "Internacional",
        estadio: "Beira-Rio",
        cidade: "Porto Alegre"
    },
    {
        id: 3,
        nome: "Flamengo",
        estadio: "Maracanã",
        cidade: "Rio de Janeiro"
    }
];

// ROTA 1: Página inicial
app.get('/', (req, res) => {
    res.render('index', {
        mensagem: 'Bem-vindo ao cadastro de times!'
    });
});

// ROTA 2: Listar todos os times
app.get('/times', (req, res) => {
    res.render('times', {
        times: times
    });
});

// ROTA 3: Detalhes de um time
app.get('/times/:id', (req, res) => {

    // Converte o ID recebido na URL para número
    const id = Number(req.params.id);

    // Procura o time pelo ID
    const time = times.find(t => t.id === id);

    // Verifica se o time existe
    if (!time) {
        return res.status(404).send('Time não encontrado!');
    }

    // Renderiza a página de detalhes
    res.render('detalhe', {
        time: time
    });
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
