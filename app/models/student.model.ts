import {Person} from "@/models/person.model";

/**
 * Definition of a student object in OOSE
 */
export class Student extends Person {

    protected id: number;

    constructor(firstname:string, lastname:string, email:string, id:number){
        super(firstname,lastname,email);
        this.id = id;
    }

    /**
     * Creates a student from the webservice student structure
     * @param obj
     */
    static fromWebservice(obj:any): Student{
        return new Student(
            obj.persoon.voornaam,
            obj.persoon.achternaam,
            obj.persoon.emailadres,
            obj.id
        )
    }
}