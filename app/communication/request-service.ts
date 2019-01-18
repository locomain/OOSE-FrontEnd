import {RequestType} from './requesttype';

export class RequestService{

    /**
     * Performs a get request
     *
     * @param {string} url
     * @returns {Promise<any>}
     */
    static async get(url: string): Promise<any>{
        return await this.request(url,RequestType.GET,null);
    }

    /**
     * Performs a post request
     *
     * @param {string} url
     * @param {object} data
     * @returns {Promise<any>}
     */
    static async post(url: string ,data: object): Promise<any>{
        return await this.request(url,RequestType.POST,data);
    }

    /**
     * Performs a put request
     *
     * @param {string} url
     * @param {object} data
     * @returns {Promise<any>}
     */
    static async put(url: string ,data: object): Promise<any>{
        return await this.request(url,RequestType.PUT,data);
    }

    /**
     * Performs a request
     *
     * @param {string} url
     * @param {RequestType} type
     * @param {object} data
     * @returns {Promise<any>}
     */
    static async request(url: string,type: RequestType,data: object = {}): Promise<any>{
        const response = await fetch(url,{
            method: type,
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data),
        });
        return await response.json();
    }

}