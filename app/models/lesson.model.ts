/**
 * Definition of a education object in OOSE
 */
import {Utils} from "@/utils/utils";

export class Lesson{

    public name: string;
    public content: string;
    public date: string;
    public id: number;

    constructor(name: string, content: string,
                date: string, id: number = 0){
        this.name = name;
        this.content = content;
        this.date = date;
        this.id = id;
    }

    /**
     * Creates a education from the webservice student structure
     * @param obj
     */
    static fromWebservice(obj: any, prefab: Lesson = null): Lesson{
        const date = Utils.dateToReadableDate(obj.datum);
        if(!prefab)return new Lesson(obj.naam,obj.document.inhoud,date,obj.id);
        prefab.name = obj.naam;
        prefab.content = obj.document.inhoud;
        prefab.date = date;
        prefab.id = obj.id;
        return prefab;
    }

}