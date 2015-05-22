/**
 * Created by Alex on 21/05/2015.
 */
import { HttpClient } from 'aurelia-http-client';
import { MovieRepositoryBase } from 'views/movies/services/movie-repository';
export class MovieDataService extends MovieRepositoryBase {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
        this.url = 'src/testdata/movies';
    }
    buildUrl(movieId) {
        return this.url + '/' + movieId + '.json';
    }
}
MovieDataService.inject = [HttpClient];
//# sourceMappingURL=mock-service.js.map