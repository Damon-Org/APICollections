import youtube from '@yimura/scraper'
import { YTDefaultSearchOptions } from '../../util/Constants.js'

export default class YouTubeAPI{
    constructor() {
        this.yt = new youtube.default();
    }

    /**
     * @param {string} searchFor A String to search for on Youtube
     * @param {Object} [options={}] The options to pass to the search scraper
     * @returns {Promise<Object>|Promise<null>} Returns JSON data or null incase of an error
     */
    async search(searchFor) {
        try {
            return (await this.yt.search(searchFor))?.videos.slice(0, 5);
        } catch (e) {
            return null;
        }
    }

    /**
     * @param {string} searchFor A String to search for on Youtube
     * @returns {Promise<Object>} JSON data
     */
    async searchOne(searchFor) {
        return (await this.yt.search(searchFor))?.videos[0];
    }
}
