# API de Gerenciamento de Livros

Esta é uma API de gerenciamento de livros que permite aos usuários buscar informações sobre livros na API do Google Books e adicionar livros a uma lista personalizada.

A ideia desse projeto é ajudar as pessoas amantes de livros a organizar seus historicos de podendo adicionar uma nota e comentario e com isso admirar a sua lista de livros crescer a cada dia.

## Funcionalidades

- Buscar informações sobre livros na API do Google Books.
- Adicionar livros a uma lista personalizada.
- Remover livros da sua lista.
- Visualizar a lista de livros adicionados.
- Inserir comentarios sobre o livro.
- Da uma nota pessoal sobre o livro.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Axios

## Pré-requisitos

- Node.js instalado
- Chave de API do Google Books já está no projeto

## Configuração

1. Clone este repositório.

2. Instale as dependências:

   ```bash
   npm install
   
## End point

### Buscar Livro (HTTP GET)

A funcionalidade de buscar livro permite que você consulte informações sobre um livro específico na API do Google Books. Para isso, utilize o seguinte endpoint:

#### Endpoint: /api/buscarLivro/:nomeLivro
Método: GET

Você deve substituir :nomeLivro pelo título do livro que deseja buscar.

Por exemplo, se você deseja buscar informações sobre o livro "Harry Potter", a URL ficaria assim:

##### /api/buscarLivro/Harry Potter

Ao fazer uma solicitação GET para esse endpoint, a API fará uma consulta à API do Google Books e retornará informações detalhadas sobre o livro, como título, autor, categoria, resumo e muito mais.

### Adicionar Livro (HTTP POST)
A funcionalidade de adicionar livro permite que você inclua um livro à sua lista personalizada. Para fazer isso, utilize o seguinte endpoint:

#### Endpoint: /api/adicionarLivro
Método: POST

Ao adicionar um livro, você deve fornecer as informações sobre o livro no corpo da solicitação em formato JSON. As informações obrigatórias são o nome do livro, mas você também pode incluir uma nota e um comentário opcionalmente.

Exemplo de Corpo da Solicitação JSON: 

{
  "nomeLivro": "Harry Potter e a Pedra Filosofal",
  "nota": 5,
  "comentário": "Ótimo livro!"
}

Após enviar a solicitação POST para este endpoint, o livro será adicionado à sua lista personalizada e você receberá uma confirmação de que o livro foi adicionado com sucesso.

### Remover Livro (HTTP DELETE)
A funcionalidade de remover livro permite que você exclua um livro da sua lista personalizada. Para fazer isso, utilize o seguinte endpoint:

#### Endpoint: /api/removerLivro/:nomeLivro
Método: DELETE

Você deve substituir :nomeLivro pelo título do livro que deseja remover.

Por exemplo, se você deseja remover o livro "Harry Potter e a Pedra Filosofal", a URL ficaria assim:

/api/removerLivro/Harry Potter e a Pedra Filosofal

Ao fazer uma solicitação DELETE para esse endpoint, o livro será removido da sua lista personalizada e você receberá uma confirmação de que o livro foi removido com sucesso.


