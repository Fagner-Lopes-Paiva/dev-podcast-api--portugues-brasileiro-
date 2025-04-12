import { repositorioPodcast } from "../data/podcast-repositorio";
import { FiltrarPodcastModelo } from "../modelos/filtrar-podcast-modelo";
import { statusCode } from "../utilidades/status-code";

export const servicoListaEpisodios = async (): Promise<FiltrarPodcastModelo> => {
    //define o contrato
    let formatoResposta: FiltrarPodcastModelo = {
            statusCode: 0,
            body: []
    }
    // busca um dado
    const data = await repositorioPodcast();
    //verifica se o dado foi encontrado
    if (data.length > 0) {
        formatoResposta.statusCode = statusCode.OK;
    } else {
        formatoResposta.statusCode = statusCode.NOT_FOUND;
    }
    formatoResposta.body = data;
    
    return formatoResposta;
}