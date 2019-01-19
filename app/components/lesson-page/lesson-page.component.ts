import {MaterialComponent} from "@/components/material.component";
import {Module} from '@/models/module.model';
import {Endpoints} from "@/communication/endpoints";
import {ModuleDialog} from "@/components/module-dialog/module-dialog.component";
import {Person} from "@/models/person.model";
import {bind} from "@/decorators/bind";
import {Lesson} from "@/models/lesson.model";

@component({
    tag:"lesson-page",
    view:require("./lesson-page.component.html"),
    style:require("./lesson-page.component.css")
})
class LessonPageComponent extends MaterialComponent{

    public loading = false;
    public module: Module;
    public dialog: ModuleDialog;
    public lessons: Lesson[] = [];
    public id: number;

    constructor(){
        super();
        this.module = new Module("Opleiding","","","");
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
        await this.loadModule();
        await this.loadLessons();
        this.loading = false;
    }

    /**
     * Loads the education
     *
     * @param {number} id
     * @returns {Promise<any>}
     */
    async loadModule(): Promise<any>{
        const result = await Endpoints.getEducation(this.id);
        if(result){
            Module.fromWebservice(result,this.module);
        }
    }

    /**
     * Load modules from education id
     * @param id
     */
    async loadLessons(): Promise<any>{
        const result = await Endpoints.getLessons();
        if(result){
            this.lessons = result.map(lesson=>Lesson.fromWebservice(lesson));
        }
    }


    /**
     * Saves/post a student to the api
     * @param {Person} person
     */
    @bind
    saveLesson(lesson: Lesson){
        this.loading = true;
        Endpoints.createModule(this.id,module).then(()=>this.loadLessons());
    }

    /**
     * Opens the create student dialog to create a student
     */
    @bind
    addModule(): void{
       // this.dialog.open(this.saveLesson);
    }

}