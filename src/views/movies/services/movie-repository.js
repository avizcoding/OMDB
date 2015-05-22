/**
 * Created by Alex on 21/05/2015.
 */
export class MovieRepositoryBase {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getMovie(movieId, refreshCache) {
        var movie = null;
        return new Promise((resolved, rejected) => {
            var url = this.buildUrl(movieId);
            this._httpClient.get(url).then(response => {
                if (response.Error != null) {
                    rejected(response.Error);
                }
                else {
                    resolved(response.content);
                }
            });
        });
    }
    buildUrl(movieId) {
        return '';
    }
}
//# sourceMappingURL=movie-repository.js.map