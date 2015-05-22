/**
 * Created by Alex on 21/05/2015.
 */
///<reference path="../movie.d.ts"/>
  
export class ActorListViewViewModel {
  private actorList: Array<Movie.IActorList>;

  constructor(){
  }
  
  activate(actorList: Array<Movie.IActorList>){
    this.actorList = [];
  }
}
