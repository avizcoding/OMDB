/**
 * Created by Alex on 24/05/2015.
 */
///<reference path="../movie.d.ts"/>
  
export class AwardsViewViewModel{
  private awards: Array<Movie.IAward>;
  
  activate(model: any){
    this.awards = model;
  }
}
