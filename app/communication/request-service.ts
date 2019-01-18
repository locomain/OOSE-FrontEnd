import {RequestType} from './requesttype';

export class RequestService{

    /**
     * Performs a get request
     *
     * @param {string} url
     * @returns {Promise<any>}
     */
    static async get(url: string): Promise<any>{
        return this.request(url,RequestType.GET,null);
    }

    /**
     * Performs a post request
     *
     * @param {string} url
     * @param {object} data
     * @returns {Promise<any>}
     */
    static async post(url: string ,data: object): Promise<any>{
        return this.request(url,RequestType.POST,data);
    }

    /**
     * Performs a put request
     *
     * @param {string} url
     * @param {object} data
     * @returns {Promise<any>}
     */
    static async put(url: string ,data: object): Promise<any>{
        return this.request(url,RequestType.PUT,data);
    }

    /**
     * Performs a request
     *
     * @param {string} url
     * @param {RequestType} type
     * @param {object} data
     * @returns {Promise<any>}
     */
    static async request(url: string, type: RequestType, data: object = {}): Promise<any>{
        const params = {
            method: type,
            headers: {
                "Content-Type": "application/json"
            }
        };
        // @ts-ignore
        if(type!=RequestType.GET)params.body = JSON.stringify(data);
        // @ts-ignore
        const response = await fetch(url,params);
        return await response.json()
    }

}