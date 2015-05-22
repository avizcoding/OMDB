/**
 * Created by Alex on 21/05/2015.
 */

///<reference path="../../../../typings/aurelia/aurelia.d.ts"/>
///<reference path="../movie.d.ts"/>

import {HttpClient} from 'aurelia-http-client';

export class MovieRepositoryBase implements Movie.IMovieRepository{
  constructor(public _httpClient: HttpClient){
  }

  public getMovie(movieId: string, refreshCache?: boolean): Promise<Movie.IMovie>{
    var movie: Movie.IMovie = null;
    return new Promise<Movie.IMovie>((resolved, rejected) => {
      var url = this.buildUrl(movieId);
      this._httpClient.get(url).then(response => {
        if(response.Error != null){
          rejected(response.Error);
        } else {
          resolved(response.content);
        }
      })
    })
  }

  public buildUrl(movieId: string): string{
    return '';
  }
}
