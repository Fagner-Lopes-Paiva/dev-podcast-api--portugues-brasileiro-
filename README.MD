# 🎧 Dev Podcast

O **Dev Podcast** é um aplicativo que centraliza episódios de podcasts em vídeo, organizados por categorias. Inspirado na experiência da Netflix, o projeto tem como objetivo proporcionar uma navegação fluida e agradável entre episódios diversos, com foco em **podcasts em vídeo** de diferentes temas.

---

## 🧠 Descrição

O Dev Podcast oferece uma plataforma moderna para o consumo de podcasts em vídeo. Os episódios são organizados por categorias e o usuário pode filtrar por nome de podcast, facilitando a descoberta de conteúdo relevante.

---

## 🌐 Domínio

A aplicação é voltada exclusivamente para **podcasts em vídeo**, cobrindo uma ampla gama de temas como:

- Saúde
- Fitness
- Mentalidade
- Humor
- Bodybuilding
- Entre outros...

---

## 🚀 Features

✅ Lista de episódios organizados por categoria  
✅ Filtro por nome do podcast  
✅ Interface semelhante ao modelo Netflix  
✅ Capa do vídeo e link direto para o YouTube  
✅ Integração com API REST (formato JSON)  

---

## 🧭 Como funciona

A aplicação:

1. Faz uma requisição para uma API REST que retorna os dados dos episódios;
2. Organiza os episódios em seções por categoria;
3. Permite que o usuário filtre os episódios por nome do podcast;
4. Exibe a **imagem de capa**, o **nome do episódio** e o **link para o vídeo** (YouTube).

---

## 📡 Exemplo de retorno da API

```json
[
  {
    "podcastName": "Flow",
    "episodio": "DANIEL LOPEZ - Flow #357",
    "videoId": "o0nj1kdApdg",
    "cover": "https://i.ytimg.com/vi/o0nj1kdApdg/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=o0nj1kdApdg",
    "categories": ["saúde", "bodybuilder"]
  }
]
