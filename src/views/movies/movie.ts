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

  private _movie: any;
  private _metadata: Movie.IMetadata;
  private _actorList: Array<Movie.IActor>;
  public isBusy: boolean;
  public busyContent: string;

  constructor(private _dataService: MovieDataService){
  }

  public get movie(): any{
    return this._movie;
  }

  public set movie(value: any){
    this._movie = value;
  }

  public get metadata(): Movie.IMetadata{
    return this._metadata;
  }

  public set metadata(value: Movie.IMetadata){
    this._metadata = value;
  }

  public get actorList(): Array<Movie.IActor>{
    return this._actorList;
  }

  public set actorList(value: Array<Movie.IActor>){
    this._actorList = value;
  }

  public configureRouter(config: IRouterConfig, router: Router){
    this.router = router;
    config.map([
      {route: ['', 'metadata'], moduleId: './templates/metadata', nav: true, title: 'metadata'}
    ]);
  }

  public activate(){
    this.isBusy = true;
    this.busyContent = "Getting data";
    this._dataService.getMovie('Whiplash', false).then(response => {
      this.movie = response;

      this.metadata = this.getMetadata(this.movie);
      this.actorList = this.getActorList(this.movie);
      this.isBusy = false;
    })
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
}
