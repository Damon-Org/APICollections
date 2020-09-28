import BaseModule from '../structures/modules/BaseModule.js'

import SpotifyAPI from './structures/SpotifyAPI.js'
import YouTubeAPI from './structures/YouTubeAPI.js'

export default class APICollections extends BaseModule {
    /**
     * @param {Main} main
     */
    constructor(main) {
        super(main);

        this.register(APICollections, {
            name: 'api'
        });
    }

    setup() {
        this.youtube = new YouTubeAPI();
        this.spotify = new SpotifyAPI(this._m, this.auth.credentials.api.spotify);

        return true;
    }
}
