import fs from "fs";
import path from "path";
import { formaPodcast } from "../modelos/modelo-podcast";

const caminhoArquivo = path.join(__dirname, "../data/podcasts.json");

export const repositorioPodcast = async (podcastName?: string): Promise<formaPodcast[]> => {
    const dadoBruto = fs.readFileSync(caminhoArquivo, "utf8");
    let arquivoJson = JSON.parse(dadoBruto);

    if (podcastName) {
        arquivoJson = arquivoJson.filter(
            (podcast: formaPodcast) => podcast.podcastName === podcastName
        );
    }
    
    return arquivoJson;
}