import { formaPodcast } from "./modelo-podcast";

export interface FiltrarPodcastModelo {
    statusCode: number,
    body: formaPodcast[]
}