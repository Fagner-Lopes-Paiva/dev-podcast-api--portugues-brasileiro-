import * as http from "http";
import { getFilterEpisodios, getListarEpisodios } from './controllers/podcast-controle';
import { Rotas } from "./routers/rotas";
import { HttpMetodo } from "./utilidades/http-metodo";

const server = http.createServer( async (pergunta: http.IncomingMessage, resposta: http.ServerResponse) => {
    //querystring
    const baseUrl = pergunta.url?.split('?')[0] || '';

    // rotas de endpoints
    if (pergunta.method === HttpMetodo.GET && baseUrl === Rotas.LISTAR_EPISODIOS) {
        await getListarEpisodios(pergunta, resposta);
    }
    if (pergunta.method === HttpMetodo.GET && baseUrl === Rotas.FILTER_EPISODIOS) {
        await getFilterEpisodios(pergunta, resposta);
    }

})

const porta = process.env.PORTA;

server.listen(porta, () => {
    console.log('Bem vindo Fagner ao seu novo servidor!');
})