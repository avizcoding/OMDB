/**
 * Created by Alex on 21/05/2015.
 */

///<reference path="movie.d.ts"/>

/* TODO
* Add I18N from zewa666/i18n
* */

import {MovieDataService} from 'movie-module';

export class Movie {
  public static inject = [MovieDataService];

  private _movie: Movie.IMovie;
  private _metadata: Movie.IMetadata;
  private _actorList: Movie.IActorList;
  public isBusy: boolean;

  constructor(private _dataService: MovieDataService){
  }

  public get movie(): Movie.IMovie{
    return this._movie;
  }

  public set movie(value: Movie.IMovie){
    this._movie = value;
  }

  public get metadata(): Movie.IMetadata{
    return this._metadata;
  }

  public set metadata(value: Movie.IMetadata){
    this._metadata = value;
  }

  public get actorList(): Movie.IActorList{
    return this._actorList;
  }

  public set actorList(value: Movie.IActorList){
    this._actorList = value;
  }

  public activate(){
    this.isBusy = true;
    this._dataService.getMovie('Whiplash', false).then(response => {
      this.movie = response;

      this.metadata = this.getMetadata(this.movie);

      this.actorList = response;
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
}
