import {MaterialComponent} from "@/components/material.component";
import {Module} from '@/models/module.model';
import {Endpoints} from "@/communication/endpoints";
import {Education} from "@/models/education.model";
import {Student} from "@/models/student.model";
import {ModuleDialog} from "@/components/dialogs/module-dialog/module-dialog.component";
import {Person} from "@/models/person.model";
import {bind} from "@/decorators/bind";

@component({
    tag:"module-page",
    view:require("./module-page.component.html"),
    style:require("./module-page.component.css")
})
class ModuleComponent extends MaterialComponent{

    public loading = false;
    public education: Education;
    public dialog: ModuleDialog;
    public modules: Module[] = [];
    public id: number;

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
            this.id = parameters.id;
            this.loadData();
        }
    }

    /**
     * Loads all the page data
     * @param id
     * @returns {Promise<any>}
     */
    async loadData() : Promise<any>{
        this.loading = true;
        await this.loadEducation();
        await this.loadModules();
        this.loading = false;
    }

    /**
     * Loads the education
     *
     * @param {number} id
     * @returns {Promise<any>}
     */
    async loadEducation(): Promise<any>{
        const result = await Endpoints.getEducation(this.id);
        if(result){
            Education.fromWebservice(result,this.education);
        }
    }

    /**
     * Load modules from education id
     * @param id
     */
    async loadModules(): Promise<any>{
        const result = await Endpoints.getModules(this.id);
        if(result){
            this.modules = result.map(module=>Module.fromWebservice(module));
        }
    }

    @bind
    goToLessons(e): void {
        const element = e.srcElement;
        //@ts-ignore
        braw.navigate(`education/${this.id}/module/${element.dataId}`);
    }


    /**
     * Saves/post a student to the api
     * @param {Person} person
     */
    @bind
    saveModules(module: Module): void{
        this.loading = true;
        Endpoints.createModule(this.id,module).then(()=>this.loadData());
    }

    /**
     * Opens the create student dialog to create a student
     */
    @bind
    addModule(): void{
        this.dialog.open(this.saveModules);
    }

}