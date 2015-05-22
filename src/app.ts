/**
 * Created by Alex on 21/05/2015.
 */

///<reference path="../typings/aurelia/aurelia.d.ts"/>
///<reference path="core/typings/main.d.ts"/>

import {Router, IRouterConfig} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  public static inject = [];
  public router: Router;

  public configureRouter(config: IRouterConfig, router: Router){
    config.title = 'OMDB';
    config.map([
      { route: ['', 'movie'], moduleId: './views/movies/movie', nav: true, title: 'Movies' }
    ]);
    this.router = router;
  }
}
