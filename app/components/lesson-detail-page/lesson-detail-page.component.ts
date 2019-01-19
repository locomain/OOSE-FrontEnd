import {MaterialComponent} from "@/components/material.component";
import {Module} from '@/models/module.model';
import {Endpoints} from "@/communication/endpoints";
import {ModuleDialog} from "@/components/dialogs/module-dialog/module-dialog.component";
import {Person} from "@/models/person.model";
import {bind} from "@/decorators/bind";
import {Lesson} from "@/models/lesson.model";
import {Utils} from "@/utils/utils";
import {LessonDialog} from "@/components/dialogs/lesson-dialog/lesson-dialog.component";
import {StudyGoal} from "@/models/studygoal.model";

@component({
    tag:"lesson-detail-page",
    view:require("./lesson-detail-page.component.html"),
    style:require("./lesson-detail-page.component.css")
})
class LessonPageComponent extends MaterialComponent{

    public loading = false;
    public lesson: Lesson;
    public dialog: LessonDialog;
    public studyGoals: StudyGoal[] = [];
    public id: number;

    constructor(){
        super();
        this.lesson = new Lesson("Les","","");
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
        await this.loadLesson();
        await this.loadStudyGoals();
        this.loading = false;
    }

    /**
     * Loads the lesson
     *
     * @param {number} id
     * @returns {Promise<any>}
     */
    async loadLesson(): Promise<any>{
        const result = await Endpoints.getLesson(this.id);
        console.log(result);
        if(result){
            this.lesson = Lesson.fromWebservice(result,this.lesson);
        }
    }

    /**
     * Load lessons from module id
     * @param id
     */
    async loadStudyGoals(): Promise<any>{
        const result = await Endpoints.getStudyGoalsFromLesson(this.id);
        console.log(result);
        if(result){
            this.studyGoals = result.map(studyGoal=>StudyGoal.fromWebservice(studyGoal));
            console.log(this.studyGoals);
        }
    }


    /**
     * Saves/post a lesson to the api
     * @param {Lesson} lesson
     */
    @bind
    saveLesson(lesson: Lesson){
        this.loading = true;
        //Endpoints.createLesson(this.id,lesson).then(()=>this.loadData());
    }

    /**
     * Opens the create student dialog to create a student
     */
    @bind
    addGoal(): void{
        //this.dialog.open(this.saveLesson);
    }

}