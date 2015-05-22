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

  export interface IActor{
    actorId: string;
    actorName: string;
    biography: {
      actorActress: string;
      bio: string;
      born: string;
      dateOfBirth: string;
      filmography: Array<IFilmography>;
      height: string;
      idIMDB: string;
      name: string;
      placeOfBirth: string;
      starSign: string;
      trivia: Array<string>;
      uniqueName: string;
      urlPhoto: string;
    };
    character: string;
    urlCharacter: string;
    urlPhoto: string;
    urlProfile: string;

  }

  export interface IFilmography{
    filmography: Array<IFilmographyItem>;
    section: string;
  }

  export interface IFilmographyItem{
    IMDBId: string;
    remarks?: string;
    title: string;
    year: string;
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
