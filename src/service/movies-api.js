import request from 'request-promise'
import {API_HOST, API_PORT} from '../constants'

/**
 * Build url from parts
 */
function url(endpoint) {
    return 'http://' + API_HOST + ':' + API_PORT + '/api' + endpoint;
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

        return request(rq)
                .then(function(result) {
                    return result.data;
                });
    }

    static moviesRead(id) {
        return request(requestFactory('/movies/' + id))
                .then(function(result) {
                    return result.data;
                });;
    }

    static actorsList() {
        return request(requestFactory('/actors'))
                .then(function(result) {
                    return result.data;
                });
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