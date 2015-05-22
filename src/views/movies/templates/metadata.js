/**
 * Created by Alex on 21/05/2015.
 */
///<reference path="../movie.d.ts"/>
export class MetadataViewViewModel {
    constructor() {
    }
    activate(metadata) {
        this.metadata = metadata;
        console.log(metadata);
    }
}
//# sourceMappingURL=metadata.js.map