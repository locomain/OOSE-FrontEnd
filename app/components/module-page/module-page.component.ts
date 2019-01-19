import {MaterialComponent} from "@/components/material.component";
import {Module} from '@/models/module.model';
import {Endpoints} from "@/communication/endpoints";
import {Education} from "@/models/education.model";
import {Student} from "@/models/student.model";

@component({
    tag:"module-page",
    view:require("./module-page.component.html"),
    style:require("./module-page.component.css")
})
class ModuleComponent extends MaterialComponent{

    public loading = false;
    public education: Education;
    public modules : Module[] = [];

    constructor(){
        super();
        this.education = new Education("Opleiding","");
    }

    /**
     * Default braw on render event
     */
    onRender(): void{
        const parameters = braw.navigationEngine.params;
        if(parameters.id){
            this.loadData(parameters.id);
        }
    }

    /**
     * Loads all the page data
     * @param id
     * @returns {Promise<any>}
     */
    async loadData(id) : Promise<any>{
        this.loading = true;
        await this.loadEducation(id);
        await this.loadModules(id);
        this.loading = false;
    }

    /**
     * Loads the education
     *
     * @param {number} id
     * @returns {Promise<any>}
     */
    async loadEducation(id:number): Promise<any>{
        const result = await Endpoints.getEducation(id);
        if(result){
            Education.fromWebservice(result,this.education);
        }
    }

    /**
     * Load modules from education id
     * @param id
     */
    async loadModules(id: number): Promise<any>{
        const result = await Endpoints.getModules(id);
        if(result){
            this.modules = result.map(module=>Module.fromWebservice(module));
        }
    }

}