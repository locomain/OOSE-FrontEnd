/**
 * Definition of a education object in OOSE
 */
export class Education {

    public id: number;
    public name: string;
    public year: string;

    constructor(name: string, year: string, id:number = 0){
        this.name = name;
        this.id = id;
        this.year = year;
    }

    /**
     * Creates a education from the webservice student structure
     * @param obj
     */
    static fromWebservice(obj: any, educationPrefab: Education = null): Education{
        if(!educationPrefab)return new Education(obj.naam,obj.startjaar,obj.id);
        educationPrefab.name = obj.naam;
        educationPrefab.year = obj.startjaar;
        educationPrefab.id = obj.id;
        return educationPrefab;
    }

}