/**
 * Created by Alex on 21/05/2015.
 */

///<reference path="movie.d.ts"/>
///<reference path="../../../typings/aurelia/aurelia.d.ts"/>

/* TODO
* Add I18N from zewa666/i18n
* */
import {Router, IRouterConfig} from 'aurelia-router';
import {MovieDataService} from 'movie-module';

export class Movie {
  public static inject = [MovieDataService];
  public router: Router;

  private movie: any;
  private metadata: Movie.IMetadata;
  private detail: Movie.IDetail = {data: [], viewModel: ''};
  private actions: { detailViewCallback: () => void; data: Array<Movie.IAction> };
  public isBusy: boolean;
  public busyContent: string;

  constructor(private _dataService: MovieDataService){
  }

  public activate(){
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
    })
  }

  public changeDetailView(action: Movie.IAction){
    this.detail.data = this.getAwardList();
    this.detail.viewModel = action.viewModel;
  }

  private getMetadata(movie: any): Movie.IMetadata{
    var metadata: Movie.IMetadata = {
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

  private getActorList(movie: any): Array<Movie.IActor>{
    return this.movie.actors;
  }

  private getAwardList(): Array<Movie.IAward>{
    return this.movie.awards;
  }
}
