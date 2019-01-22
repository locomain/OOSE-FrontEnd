import {Person} from "@/models/person.model";

/**
 * Definition of a teacher object in OOSE
 */
export class Teacher extends Person {

    protected id: number;

    constructor(firstname:string, lastname:string, email:string, id:number){
        super(firstname,lastname,email);
        this.id = id;
    }

    /**
     * Creates a teacher from the webservice student structure
     * @param obj
     */
    static fromWebservice(obj:any): Teacher{
        return new Teacher(
            obj.persoon.voornaam,
            obj.persoon.achternaam,
            obj.persoon.emailadres,
            obj.id
        )
    }
}