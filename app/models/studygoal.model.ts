/**
 * Definition of a education object in OOSE
 */
export class StudyGoal{

    public name: string;
    public description: string;
    public id: number;

    constructor(name: string, description: string, id: number = 0){
        this.name = name;
        this.description = description;
        this.id = id;
    }

    /**
     * Creates a education from the webservice student structure
     * @param obj
     */
    static fromWebservice(obj: any, prefab: StudyGoal = null): StudyGoal{
        if(!prefab)return new StudyGoal(obj.naam,obj.beschrijving,obj.id);
        prefab.name = obj.naam;
        prefab.id = obj.id;
        return prefab;
    }

}