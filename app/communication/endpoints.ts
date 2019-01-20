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
     * Gets education modules
     *
     * @param educationId
     * @returns {Promise<any>}
     */
    static async getModules(educationId){
        return this.webserviceRequest(`modules`,RequestType.GET);
    }

    /**
     * Get module from id
     *
     * @param id
     * @returns {Promise<any>}
     */
    static async getModule(id){
        return this.webserviceRequest(`module/${id}`,RequestType.GET);
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
    static async getLessons(moduleId){
        return this.webserviceRequest(`module/${moduleId}/classes`,RequestType.GET);
    }

    /**
     * Gets a single lesson
     *
     * @param lessonId
     * @returns {Promise<any>}
     */
    static async getLesson(lessonId){
        return this.webserviceRequest(`class/${lessonId}`,RequestType.GET);
    }

    /**
     * Creates a lesson
     *
     * @param lesson
     * @returns {Promise<any>}
     */
    static async createLesson(moduleId,lesson){
        lesson["module_id"] = moduleId;
        return this.webserviceRequest(`class`,RequestType.POST,lesson);
    }

    /**
     * Gets study goals from a lesson
     *
     * @param lessonId
     * @returns {Promise<any>}
     */
    static async getStudyGoalsFromLesson(lessonId){
        return this.webserviceRequest(`class/${lessonId}/goals`,RequestType.GET);
    }

    /**
     * Gets study goals from a lesson
     *
     * @param lessonId
     * @returns {Promise<any>}
     */
    static async getStudyGoalsFromModule(moduleId){
        return this.webserviceRequest(`module/${moduleId}/goals`,RequestType.GET);
    }

    /**
     * Create
     *
     * @param moduleId
     * @returns {Promise<any>}
     */
    static async createStudyGoal(moduleId,goal){
        goal["module_id"] =  moduleId;
        return this.webserviceRequest(`goal`,RequestType.POST,goal);
    }

    /**
     * Gets study goals from a lesson
     *
     * @param lessonId
     * @returns {Promise<any>}
     */
    static async getStudyGoalsStatusFromModule(moduleId){
        return this.webserviceRequest(`module/${moduleId}/goals_status`,RequestType.GET);
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