import request from 'request-promise'

const MOVIE_API_HOST = '192.168.38.99';
const MOVIE_API_PORT = '3000';

const host = process.env.MOVIES_API_HOST || 'localhost';
const port = process.env.MOVIES_API_PORT || '3000';

/**
 * Build url from parts
 */
function url(endpoint) {
    return 'http://' + MOVIE_API_HOST + ':' + MOVIE_API_PORT + endpoint;
}

/**
 * Provide some sensible defaults
 */
function requestFactory(endpoint, method = 'GET') {
    return {
        url: url(endpoint),
        method: method,
        qs: {},
        headers: {
            "Content-Type": "application/json"
        },
        json: true
    };
}

class MoviesApi {
    
    static moviesList(genres = null) {
        var rq = requestFactory('/movies');

        if (genres) {
            rq.qs.genre_ids = genres.join(',');
        }

        return request(rq);
    }

    static moviesRead(id) {
        return request(requestFactory('/movies/' + id));
    }

    static actorsList() {
        return request(requestFactory('/actors'));
    }

    static actorsRead(id) {
        return request(requestFactory('/actors/' + id));
    }

    static genresList() {
        return request(requestFactory('/genres'));
    }

    static genresRead(id) {
        return request(requestFactory('/genres/' + id));
    }

}

export default MoviesApi;