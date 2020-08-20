const node_fetch = require("node-superfetch");
const UnPlayerError = require('./errors');

class GTAV {
    /**
     * @param {{api_private: string, api_key: string}} [options={}]
     * @example
     * GTAV({api_private: '', api_key: ''})
     * GTAV.user()
     */
    constructor(options = {}) {
        if(!options.api_key || !options.api_key) throw new UnPlayerError("No has especificado el token.");
        this.api_key = options.api_key;
        this.api_private = options.api_private;
        this.api = "https://unplayer.com/api/1.0/";
    }
    /**
     * @param {string} id ID del usuario.
     * @returns {Promise<{
            "action": string,
            "name": string,
            "level": number,
            "banned": boolean,
            "played_time": number,
            "certification": number,
            "orgs": Array<
                {
                    "org_id": number,
                    "rank_id": number,
                    "idx": number
                }>
            
        }>}
     */
    async user(id) {
        let buscador = await node_fetch.get(`${this.api}gtav/user/${id}`).set({"__api_key": this.api_key, "__api_private": this.api_private});
        if(result.body.error) throw new UnPlayerError("No tienes autorización con las KEYS ingresadas.")
        return buscador.body;
    }

    /**
     * 
     * @param {string} id
     * @returns {
Promise<{
            "action": string,
            "id": number,
            "name": string,
            "members_count": number,
            "category": {
                "id": number,
                "name": string,
                "certification": number
            },
            "members": Array<
                {
                    "name": string,
                    "user_id": number,
                    "rank_id": number,
                    "idx": number
                }
            >,
            "ranks": Array<
                {
                    "id": number,
                    "name": string,
                    "idx": string
                }
            >
        }>}
     */
    async org(id) {
        let result = await node_fetch.get(`${this.api}gtav/org/${id}`).set({"__api_key": this.api_key, "__api_private": this.api_private});
        if(result.body.error) throw new UnPlayerError("No tienes autorización con las KEYS ingresadas.")
        return buscador.body;
    }
   
}
module.exports = GTAV
