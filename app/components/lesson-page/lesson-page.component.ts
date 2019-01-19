import {MaterialComponent} from "@/components/material.component";
import {Module} from '@/models/module.model';
import {Endpoints} from "@/communication/endpoints";
import {ModuleDialog} from "@/components/dialogs/module-dialog/module-dialog.component";
import {Person} from "@/models/person.model";
import {bind} from "@/decorators/bind";
import {Lesson} from "@/models/lesson.model";
import {Utils} from "@/utils/utils";
import {LessonDialog} from "@/components/dialogs/lesson-dialog/lesson-dialog.component";

@component({
    tag:"lesson-page",
    view:require("./lesson-page.component.html"),
    style:require("./lesson-page.component.css")
})
class LessonPageComponent extends MaterialComponent{

    public loading = false;
    public module: Module;
    public dialog: LessonDialog;
    public lessons: Lesson[] = [];
    public id: number;

    constructor(){
        super();
        this.module = new Module("Module","","","");
    }

    /**
     * Default braw on render event
     */
    onRender(): void{
        const parameters = braw.navigationEngine.params;
        console.log(parameters);
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
        const result = await Endpoints.getModule(this.id);
        if(result){
            this.module = Module.fromWebservice(result,this.module);
        }
    }

    /**
     * Load lessons from module id
     * @param id
     */
    async loadLessons(): Promise<any>{
        const result = await Endpoints.getLessons(this.id);
        console.log(result);
        if(result){
            this.lessons = result.map(lesson=>Lesson.fromWebservice(lesson));
        }
    }


    /**
     * Saves/post a lesson to the api
     * @param {Lesson} lesson
     */
    @bind
    saveLesson(lesson: Lesson){
        this.loading = true;
        Endpoints.createLesson(this.id,lesson).then(()=>this.loadData());
    }

    /**
     * Opens the create student dialog to create a student
     */
    @bind
    addLesson(): void{
        this.dialog.open(this.saveLesson);
    }

}