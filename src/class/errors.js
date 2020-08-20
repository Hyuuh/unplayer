class UnPlayerError extends Error {
    /**
     * @param {string} msg El mensaje del error.
     * @private
     */
    constructor(msg) {
        super();
        this.name = '[UnPlayer-Error]';
        
        /**
         * @private
         */
        this.message = msg;
    }
}

module.exports = UnPlayerError;