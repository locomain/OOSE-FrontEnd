import Config from "../common/config";
import {RequestService} from "@/communication/request-service";
import {RequestType} from "./requesttype";
import {Person} from "@/models/person.model";
import {Education} from "@/models/education.model";
import {Utils} from "@/utils/utils";

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
     * Creates a student
     *
     * @returns {Promise<any>}
     */
    static async createStudent(person: Person){
        return this.webserviceRequest("student",RequestType.POST, person);
    }

    /**
     * Get teachers
     *
     * @returns {Promise<any>}
     */
    static async getTeachers(){
        return this.webserviceRequest("teachers",RequestType.GET);
    }

    /**
     * Creates a teacher
     *
     * @returns {Promise<any>}
     */
    static async createTeacher(person: Person){
        return this.webserviceRequest("teacher",RequestType.POST, person);
    }

    /**
     * Get educations
     *
     * @returns {Promise<any>}
     */
    static async getEducations(){
        return this.webserviceRequest("educations",RequestType.GET);
    }

    /**
     * Gets education
     *
     * @param educationId
     * @returns {Promise<any>}
     */
    static async getEducation(educationId){
        return this.webserviceRequest(`education/${educationId}`,RequestType.GET);
    }

    /**
     * Creates a education
     *
     * @returns {Promise<any>}
     */
    static async createEducation(education: Education){
        return this.webserviceRequest("education",RequestType.POST, education);
    }

    /**
     * Gets modules
     *
     * @param educationId
     * @returns {Promise<any>}
     */
    static async getModules(educationId){
        return this.webserviceRequest(`modules`,RequestType.GET);
    }

    /**
     * Creates a module
     *
     * @param module
     * @returns {Promise<any>}
     */
    static async createModule(educationId: number, module){
        module["education_id"] = educationId;
        return this.webserviceRequest(`module`,RequestType.POST,module);
    }

    /**
     * Gets lessons
     *
     * @returns {Promise<any>}
     */
    static async getLessons(){
        return this.webserviceRequest(`lessons`,RequestType.GET);
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
        Utils.keysToLowerCase(data);
        return RequestService.request(`${Config.WEBSERVICE_URL}/${endpoint}`,type,data);
    }
}