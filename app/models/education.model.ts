import {Student} from "@/models/student.model";

/**
 * Definition of a education object in OOSE
 */
export class Education {

    public id: number;
    public name: string;
    public year: string;

    constructor(name: string, year: string, id:number){
        this.name = name;
        this.id = id;
        this.year = year;
    }

    /**
     * Creates a education from the webservice student structure
     * @param obj
     */
    static fromWebservice(obj:any): Education{
        return new Education(obj.naam,obj.startjaar,obj.id);
    }

}