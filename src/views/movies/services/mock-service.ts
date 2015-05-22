/**
 * Created by Alex on 21/05/2015.
 */

///<reference path="../movie.d.ts"/>

import {HttpClient} from 'aurelia-http-client';
import {MovieRepositoryBase} from 'views/movies/services/movie-repository';

export class MovieDataService extends MovieRepositoryBase{
  public static inject = [HttpClient];
  private url: string;

  constructor(private httpClient: HttpClient){
    super(httpClient);
    this.url = 'src/testdata/movies';
  }

  public buildUrl(movieId: string): string{
    return this.url + '/' + movieId + '.json';
  }
}
