import Config from "../common/config";
import {RequestService} from "@/communication/request-service";
import {RequestType} from "./requesttype";

export class Endpoints{

    /**
     * Get students
     *
     * @returns {Promise<any>}
     */
    static async getStudents(){
        return this.webserviceRequest("students",RequestType.GET);
    }

    /**
     * Gets modules
     *
     * @param educationId
     * @returns {Promise<any>}
     */
    static async getModules(educationId){
        return this.webserviceRequest(``,RequestType.GET);
    }

    /**
     * Gets modules
     *
     * @param educationId
     * @returns {Promise<any>}
     */
    static async getEducation(educationId){
        return this.webserviceRequest(`education/${educationId}`,RequestType.GET);
    }



    /**
     * Performs a webservice request
     *
     * @param {string} endpoint
     * @param {RequestType} type
     * @param {object} data
     * @returns {Promise<any>}
     */
    static async webserviceRequest(endpoint: string, type: RequestType, data: object = {}): Promise<any>{
        return RequestService.request(`${Config.WEBSERVICE_URL}/${endpoint}`,type,data);
    }
}