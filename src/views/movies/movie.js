/**
 * Created by Alex on 21/05/2015.
 */
import { MovieDataService } from 'movie-module';
export class Movie {
    constructor(_dataService) {
        this._dataService = _dataService;
    }
    get movie() {
        return this._movie;
    }
    set movie(value) {
        this._movie = value;
    }
    get metadata() {
        return this._metadata;
    }
    set metadata(value) {
        this._metadata = value;
    }
    get actorList() {
        return this._actorList;
    }
    set actorList(value) {
        this._actorList = value;
    }
    activate() {
        this.isBusy = true;
        this._dataService.getMovie('Whiplash', false).then(response => {
            this.movie = response;
            this.metadata = this.getMetadata(this.movie);
            this.actorList = response;
            this.isBusy = false;
        });
    }
    getMetadata(movie) {
        var metadata = {
            idIMDB: '',
            title: '',
            year: 0,
            urlPoster: '',
            plot: '',
            directors: [],
            writers: [],
            rating: 0,
            metascore: ''
        };
        metadata.idIMDB = movie.idIMDB;
        metadata.title = movie.title;
        metadata.year = parseInt(movie.year);
        metadata.urlPoster = movie.urlPoster;
        metadata.plot = movie.plot;
        metadata.directors = movie.directors;
        metadata.writers = movie.writers;
        metadata.rating = parseInt(movie.rating);
        metadata.metascore = movie.metascore;
        return metadata;
    }
}
Movie.inject = [MovieDataService];
//# sourceMappingURL=movie.js.map