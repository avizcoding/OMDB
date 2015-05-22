/**
 * Created by Alex on 21/05/2015.
 */
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
export class App {
    configureRouter(config, router) {
        config.title = 'OMDB';
        config.map([
            { route: ['', 'movie'], moduleId: './views/movies/movie', nav: true, title: 'Movies' }
        ]);
        this.router = router;
    }
}
App.inject = [];
//# sourceMappingURL=app.js.map