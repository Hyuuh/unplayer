const node_fetch = require("node-superfetch");
const UnPlayerError = require('./errors');

class SAMP {
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
     * Método para obtener la información de un usuario en el servidor de SAMP.
     * @param {string} id ID del usuario.
     * @returns {
Promise<{
            "action": string,
            "name": string,
            "level": number,
            "banned": boolean,
            "played_time": number,
            "certification": number,
            "faction_id": number,
            "faction_rank": number,
            "orgs": Array<
                {
                    "org_id": number,
                    "rank_id": number,
                    "idx": number
                }
            >
        }>
}
     */
    async user(id) {
        let result = await node_fetch.get(`${this.api}samp/user/${id}`).set({"__api_key": this.api_key, "__api_private": this.api_private});
        if(result.body.error) throw new UnPlayerError("Las KEYS ingresadas no tienen autorización.");
        return buscador.body;
    }

    /**
     * Método para obtener la información de una organización en el servidor de SAMP
     * @param {string} id ID de la organización.
     * @returns {
Promise<{
            "action": string,
            "id": number,
            "name": string,
            "certification": number,
            "members_count": number,
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
        let result = await node_fetch.get(`${this.api}samp/org/${id}`).set({"__api_key": this.api_key, "__api_private": this.api_private});
        if(result.body.error) throw new UnPlayerError("No tienes autorización con las KEYS ingresadas.")
        return buscador.body;
    }


    /**
     * Método para obtener la información de una facción en el servidor de SAMP
     * @param {string} id ID de la facción.
     * @returns {
Promise<{
            "action": string,
            "id": number,
            "name": string,
            "members_count": number,
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
    async faction(id) {
        let result = await node_fetch.get(`${this.api}samp/org/${id}`).set({"__api_key": this.api_key, "__api_private": this.api_private});
        if(result.body.error) throw new UnPlayerError("No tienes autorización con las KEYS ingresadas.")
        return buscador.body;
    }
   
}
module.exports = SAMP;

