'use strict';
const node_fetch = require("node-superfetch");
const UnPlayerError = require('./class/errors');
const GTAV = require('./class/gtav')
const SAMP = require('./class/samp')
class UnPlayer {
    /**
     * @static
     * @returns {GTAV}
     */
    static GTAV = GTAV;
    /**
     * @param {{api_private: string, api_key: string}} [options={}]
     * @example
     * new UnPlayer({api_private: '', api_key: ''})
     * UnPlayer.GTAV()
     */
    constructor(options = {}) {
        if(!options.api_key || !options.api_key) throw new UnPlayerError("No has especificado el token.");
        this.api_key = options.api_key;
        this.api_private = options.api_private;
        this.api = "https://unplayer.com/api/1.0/";
        this.GTAV = new GTAV({api_key: this.api_key, api_private: this.api_private});
    }
    /**
     * 
     * @param {string} id ID del usuario.
     * @param {"user" | "samp" | "gtav" | "forum" | "discord"} type El tipo de busqueda.
     * @returns {
Promise<{  
         
                user: number, 
                forum: number|false, 
                gtav: number|false, 
                samp: number|false, 
                discord: number|false 
    
        }>}
     */
 async user(type, id) {
    let result = await node_fetch.get(`${this.api}user?type=${type}&user_id=${id}`).set("__api_key", this.api_key).set("__api_private", this.api_private);
   if(result.body.error || result.body.ids.user == 0) throw new UnPlayerError("No se encontró el usuario.");
        return result.body.ids;
   }
  
}

module.exports = UnPlayer;
module.exports.init = function(options) {
    return UnPlayer(options)
}
module.exports.SAMP = SAMP;
module.exports.GTAV = GTAV;