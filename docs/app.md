# Podcast Manager

### Descrição
Um app ao estilo netflix, aonde possa centralizar deferentes spisódios de podcasts separados por categoria

### Domínio
Podcasts feitos em video

### Features
- Lista os episódios dos podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como
- Lista os episódios dos podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link e categoria
```js
[
    {
        podcastName: "flow",
        episodio: "DANIEL LOPEZ - Flow #357",
        videoId: "o0nj1kdApdg",
        cover: "https://i.ytimg.com/vi/o0nj1kdApdg/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=o0nj1kdApdg",
        categories: ["saúde", "bodybuilder"]
    }
]
```