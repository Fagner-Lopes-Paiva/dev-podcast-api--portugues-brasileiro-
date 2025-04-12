import { repositorioPodcast } from "../data/podcast-repositorio";
import { FiltrarPodcastModelo } from "../modelos/filtrar-podcast-modelo";
import { statusCode } from "../utilidades/status-code";

export const servicoFilterEpisodios = async (podcastName: string | undefined): Promise<FiltrarPodcastModelo> => {
    //define o contrato
    let formatoResposta: FiltrarPodcastModelo = {
        statusCode: 0,
        body: []
    }
    const recursoAdidicional = podcastName?.split('?p=')[1] || '';
    const data = await repositorioPodcast(recursoAdidicional);

    if (data.length > 0) {
        formatoResposta.statusCode = statusCode.OK;
        
    } else {
        formatoResposta.statusCode = statusCode.NOT_FOUND;
       
    }
    formatoResposta.body = data;
    return formatoResposta;
}