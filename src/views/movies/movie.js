/**
 * Created by Alex on 21/05/2015.
 */
import { MovieDataService } from 'movie-module';
export class Movie {
    constructor(_dataService) {
        this._dataService = _dataService;
        this.detail = { data: [], viewModel: '' };
    }
    activate() {
        this.isBusy = true;
        this.busyContent = "Getting data";
        this._dataService.getMovie('Whiplash', false).then(response => {
            this.movie = response;
            this.metadata = this.getMetadata(this.movie);
            this.detail.data = this.getActorList(this.movie);
            this.detail.viewModel = 'views/movies/templates/actor-list';
            this.actions = {
                detailViewCallback: this.changeDetailView.bind(this),
                data: [{
                        action: 'actor-list',
                        label: 'Actors',
                        viewModel: './templates/actor-list'
                    },
                    {
                        action: 'awards',
                        label: 'Awards',
                        viewModel: './templates/awards'
                    },
                    {
                        action: 'trivia',
                        label: 'Trivia',
                        viewModel: './templates/trivia'
                    }]
            };
            this.isBusy = false;
        });
    }
    changeDetailView(action) {
        this.detail.data = this.getAwardList();
        this.detail.viewModel = action.viewModel;
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
    getActorList(movie) {
        return this.movie.actors;
    }
    getAwardList() {
        return this.movie.awards;
    }
}
Movie.inject = [MovieDataService];
//# sourceMappingURL=movie.js.map