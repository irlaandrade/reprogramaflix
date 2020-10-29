const films = require("../models/films.json");

// Return all films
const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(films);
};

// Return a film by id
const getById = (request, response) => {
    const id = request.params.id;
    response.status(200).send(films.find(film => film.id == id));
};

// Return a film by title
const getByTitle = (request, response) => {
    const title = request.query.Title;
    // console.log(request.query);
    // console.log(request.query.Title);
    response.status(200).send(films.find(film => film.Title == title));
};

// Return a film by year
const getByYear = (request, response) => {
    const year = request.query.Year;
    response.status(200).send(films.find(film => film.Year == year));
};

// Return a film by genre
const getByGenre = (request, response) => {
    const genre = request.query.Genre;
    let newList = []; // Nova lista para guardar os filmes retornados no if, pois o response por si só não retorna

    // O forEach vai executar a função abaixo em cada elemento do array
    films.forEach(film => {
        let genreList = film.Genre.split(","); // Para transformar a strigona do Genre em array
        // console.log(generoList);
        // O for...of vai percorrer a variável iteravel chamando a função com instruções a serem executadas
        for(item of genreList) {
            // console.log(item);
            if(item.includes(genre) && film.Genre.includes(item)) {
                // console.log(filme);
                newList.push(films); // Para adicionar o filme encontrado na nova lista
                // response.status(200).send(filme); // O response só vai retornar o primeiro item encontrado, se houver mais ele não vai mostrar
            };
        };
    });

    response.status(200).send(newList);
};

// Return a film by language
const getByLanguage = (request, response) => {
    const language = request.query.Language;
    let newList = [];

    films.forEach(filme => {
        let languageList = filme.Language.split(",");
        for(item of languageList) {
            if(item.includes(language) && filme.Language.includes(item)) {
                newList.push(films);
            };
        };
    });

    response.status(200).send(newList);
};


// Exportando todas as funções para serem usadas no routes
module.exports = {
    getAll,
    getById,
    getByTitle,
    getByYear,
    getByGenre,
    getByLanguage
}