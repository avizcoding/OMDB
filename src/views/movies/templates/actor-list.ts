/**
 * Created by Alex on 21/05/2015.
 */
///<reference path="../movie.d.ts"/>
  
import 'rowlink';
export class ActorListViewViewModel {
  private actorList: Array<Movie.IActor>;

  constructor(){
  }
  
  activate(actorList: Array<Movie.IActor>){
    this.actorList = actorList;
  }
}
