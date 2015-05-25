/**
 * Created by Alex on 25/05/2015.
 */
///<reference path="../movie.d.ts"/>
export class ActionViewViewModel {
    activate(model) {
        this.actions = new Actions(model);
        console.log(this.actions);
    }
}
export class Actions {
    constructor(actions) {
        this.actions = actions;
    }
}
//# sourceMappingURL=actions.js.map