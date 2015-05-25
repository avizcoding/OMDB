/**
 * Created by Alex on 25/05/2015.
 */

///<reference path="../movie.d.ts"/>

export class ActionViewViewModel{
  public actions: Actions;

  activate(model: { callback: () => void; data: Array<Movie.IAction> }){
    this.actions = new Actions(model);
    console.log(this.actions);
  }
}

export class Actions{
  constructor(public actions: { callback: () => void; data: Array<Movie.IAction> }){
  }
}
