import Config from "../common/config";
import {RequestService} from "@/communication/request-service";
import {RequestType} from "requesttype";

export class Endpoints{

    /**
     * Get students
     *
     * @returns {Promise<any>}
     */
    static async getStudents(){
        return await this.webserviceRequest("students",RequestType.GET, null);
    }

    /**
     * Performs a webservice request
     * 
     * @param {string} endpoint
     * @param {RequestType} type
     * @param {object} data
     * @returns {Promise<any>}
     */
    static async webserviceRequest(endpoint: string, type: RequestType, data: object): Promise<any>{
        return RequestService.request(`${Config.WEBSERVICE_URL}/${endpoint}`,type,data);
    }
}