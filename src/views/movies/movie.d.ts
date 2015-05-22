/**
 * Created by Alex on 21/05/2015.
 */
declare module Movie{
  export interface IMovie{
  }

  export interface IMetadata{
    idIMDB: string;
    title: string;
    year: number;
    urlPoster: string;
    plot: string;
    directors: Array<IDirector>;
    writers: Array<IWriter>;
    rating: number;
    metascore: string;
  }

  export interface IActorList{

  }

  export interface IActor{

  }

  export interface IDirector{
    name: string;
    nameId: string;
  }

  export interface IWriter{
    name: string;
    nameId: string;
  }

  export interface IMovieRepository{
    getMovie(movieId: string, refreshCache?: boolean): Promise<IMovie>;
  }
}

declare module 'movie-module'{
  class MovieDataService implements Movie.IMovieRepository{
    getMovie(movieId: string, refreshCache?: boolean): Promise<Movie.IMovie>;
  }
}
