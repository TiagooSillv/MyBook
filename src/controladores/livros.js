const buscarLivro = require("../apiBook");
const meusLivros = require ('../bancoDeDados/bancoDeDados');

const mostrarLivro = async (req, res) => {
  const { nomeLivro } = req.params;

  try {
    const livros = await buscarLivro(nomeLivro);

    if (livros.items && livros.items.length > 0) {
      const descricao = {
        titulo: livros.items[0].volumeInfo.title,
        subtitulo: livros.items[0].volumeInfo.subtitle,
        autor: livros.items[0].volumeInfo.authors,
        idioma: livros.items[0].volumeInfo.language,
        categorias: livros.items[0].volumeInfo.categories,
        publicadoEm: livros.items[0].volumeInfo.publishedDate,
        identificador: livros.items[0].volumeInfo.industryIdentifiers[0],
        resumo: livros.items[0].volumeInfo.description
      };

      return res.status(200).json(descricao);
    } else {
      return res.status(404).json({ mensagem: "Livro não encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const addLivro = async (req, res) => {
  const { nomeLivro, nota, comentario } = req.body;

  if (!nomeLivro) {
    return res.status(409).json({ Mensagem: "Favor insira o nome do livro" });
  }

  if (!nota) {
    nota = null;
  }
  if (!comentario) {
    comentario = null;
  }

  try {
    const livros = await buscarLivro(nomeLivro);

    if (livros.items && livros.items.length > 0) {
      const descricao = {
        titulo: livros.items[0].volumeInfo.title,
        subtitulo: livros.items[0].volumeInfo.subtitle,
        autor: livros.items[0].volumeInfo.authors,
        idioma: livros.items[0].volumeInfo.language,
        categorias: livros.items[0].volumeInfo.categories,
        publicadoEm: livros.items[0].volumeInfo.publishedDate,
        identificador: livros.items[0].volumeInfo.industryIdentifiers[0],
        resumo: livros.items[0].volumeInfo.description
      };

      const existeNaMinhaLista = meusLivros.livros.find((livro) => {
        return livro.descricao.titulo === descricao.titulo;
      });

      if (existeNaMinhaLista) {
        return res.status(409).json({ Mensagem: "Este livro já está na sua lista" });
      }

      const avaliacao = { nota, comentario };
      meusLivros.livros.push({ avaliacao, descricao });
      meusLivros.quantidade++;

      return res.status(201).json({ mensagem: "O livro foi adicionado à sua lista com sucesso!" });
    } else {
      return res.status(404).json({ mensagem: "Livro não encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const minhaLista = (req, res) => {
  res.status(200).json(meusLivros.livros);
};
const removerLivro = (req, res) =>{
    const { nomeLivro } = req.body;

    if (!nomeLivro) {
        return res.status(409).json({"Mensagem":"Favor inserir o nome do livro "})
    }
    const existeLivro = meusLivros.livros.find((livro)=>{
        return livro.descricao.titulo == nomeLivro;
    });

    if (!existeLivro) {
        return res.status(404).json({"Mensagem":"Não existe livro com esse nome na sua lista!"});
    }
    const posicaoLivro = meusLivros.livros.findIndex((livro)=>{
        return livro.titulo == nomeLivro;
    });

    meusLivros.livros.splice(posicaoLivro, 1)
    meusLivros.quantidade --;
    return res.status(201).json({"Mensagem":"O livro foi removido com sucesso"});
}

module.exports = {
    
  mostrarLivro,
  addLivro,
  minhaLista,
  removerLivro

};
