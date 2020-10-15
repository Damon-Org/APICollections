import youtube from 'scrape-youtube'
import { YTDefaultSearchOptions } from '../../util/Constants.js'

export default class YouTubeAPI{
    constructor() {
        this.yt = youtube.default;
    }

    _mergeOptions(...args) {
        return Object.assign({}, YTDefaultSearchOptions, ...args);
    }

    /**
     * @param {string} searchFor A String to search for on Youtube
     * @param {Object} [options={}] The options to pass to the search scraper
     * @returns {Promise<Object>|Promise<null>} Returns JSON data or null incase of an error
     */
    async search(searchFor, options = {}) {
        options = this._mergeOptions(options);

        try {
            return await this.yt.search(searchFor, options);
        } catch (e) {
            return null;
        }
    }

    /**
     * @param {string} searchFor A String to search for on Youtube
     * @returns {Promise<Object>} JSON data
     */
    searchOne(searchFor) {
        return this.search(searchFor, { limit: 1, type: 'video' });
    }
}
