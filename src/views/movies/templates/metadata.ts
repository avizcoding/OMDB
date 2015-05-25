/**
 * Created by Alex on 21/05/2015.
 */
///<reference path="../movie.d.ts"/>

export class MetadataViewViewModel {
  public metadata: Movie.IMetadata;

  constructor(){
  }

  activate(metadata: Movie.IMetadata){
    this.metadata = metadata;
  }
}
