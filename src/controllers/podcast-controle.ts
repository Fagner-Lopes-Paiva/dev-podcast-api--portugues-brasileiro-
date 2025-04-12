import { IncomingMessage, ServerResponse } from 'http';
import { servicoListaEpisodios } from '../services/lista-episodios-service';
import { servicoFilterEpisodios } from '../services/filter-episodios-service';
import { ContenteType } from '../utilidades/content-type';
import { FiltrarPodcastModelo } from '../modelos/filtrar-podcast-modelo';


export const getListarEpisodios = async( 
    pergunta: IncomingMessage, 
    resposta: ServerResponse ) => {
    const conteudo: FiltrarPodcastModelo = await servicoListaEpisodios();
    resposta.writeHead(conteudo.statusCode, {"content-type": ContenteType.JSON});
    resposta.write(JSON.stringify(conteudo.body));
    resposta.end();
}

export const getFilterEpisodios = async(
    pergunta: IncomingMessage, 
    resposta: ServerResponse) => {
    const conteudo: FiltrarPodcastModelo = await servicoFilterEpisodios(pergunta.url);
    resposta.writeHead(conteudo.statusCode, {"content-type": ContenteType.JSON});
    resposta.write(JSON.stringify(conteudo.body));
    resposta.end();
}