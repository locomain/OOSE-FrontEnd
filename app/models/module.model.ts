/**
 * Definition of a education object in OOSE
 */
import {Utils} from "@/utils/utils";

export class Module{

    public name: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public id: number;

    constructor(name: string, description: string,
                startDate: string, endDate: string, id: number = 0){
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.id = id;
    }

    /**
     * Creates a education from the webservice student structure
     * @param obj
     */
    static fromWebservice(obj: any, prefab: Module = null): Module{
        if(!prefab)return new Module(obj.naam,obj.beschrijving,obj.startdatum,obj.einddatum,obj.id);
        prefab.name = obj.naam;
        prefab.description = obj.beschrijving;
        prefab.startDate = Utils.dateToReadableDate(obj.startdatum);
        prefab.endDate = Utils.dateToReadableDate(obj.einddatum);
        prefab.id = obj.id;
        return prefab;
    }

}