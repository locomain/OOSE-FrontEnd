/**
 * Definition of a education object in OOSE
 */
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
        if(!prefab)return new Lesson(obj.naam,obj.lesstof,obj.datum,obj.id);
        prefab.name = obj.naam;
        prefab.content = obj.lesstof;
        prefab.date = obj.date;
        prefab.id = obj.id;
        return prefab;
    }

}