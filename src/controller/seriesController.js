const series = require("../models/series.json");

// Return all series
const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(series);
};

// Usando com o params
// const getById = (request, response) => {
//     const id = request.params.id;
//     response.status(200).send(series.find(serie => serie.id == id));
// };

// Usando com o query. Return series by id
const getById = (request, response) => {
    const id = request.query.id;
    console.log(request.query)
    response.status(200).send(series.find(serie => serie.id == id));
};

// Return series by title
const getByTitle = (request, response) => {
    const title = request.query.title;
    response.status(200).send(series.find(serie => serie.title == title));
};

// Return series by seasons
const getBySeasons = (request, response) => {
    const season = request.query.totalSeasons;
    response.status(200).send(series.find(serie => serie.totalSeasons == season));
};

// Return series by genre
const getByGenre = (request, response) => {
    const genre = request.query.genre;
    let newList = [];

    series.forEach(serie => {
        let genreList = serie.genre;

        for(item of genreList) {
            if(item.includes(genre) && serie.genre.includes(item)) {
                newList.push(serie);
            };
        };
    });

    response.status(200).send(newList);

}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getBySeasons,
    getByGenre
}