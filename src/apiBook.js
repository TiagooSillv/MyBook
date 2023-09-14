const axios = require('axios');
const { response } = require('./rotas');



const buscarLivro = async (nomeLivro)=>{

    const apiKey = 'AIzaSyA1AAxOAnyfdk3Z0wLT1PX20btvxhO4B8Q';
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes';

    try {
        const response = await axios.get(apiUrl,{
            params: {
                q: nomeLivro,
                key: apiKey,
            },
        });

        return response.data

    } catch (error) {

        throw console.error("Erro na busca do livro" + error.message);
    }

}

module.exports = buscarLivro
