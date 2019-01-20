import {MaterialComponent} from "@/components/material.component";
import {Module} from '@/models/module.model';
import {Endpoints} from "@/communication/endpoints";
import {bind} from "@/decorators/bind";
import {Lesson} from "@/models/lesson.model";
import {LessonDialog} from "@/components/dialogs/lesson-dialog/lesson-dialog.component";
import {StudyGoal} from "@/models/studygoal.model";
import {StudyGoalDialog} from "@/components/dialogs/study-goal-dialog/study-goal-dialog.component";

@component({
    tag:"lesson-page",
    view:require("./lesson-page.component.html"),
    style:require("./lesson-page.component.css")
})
class LessonPageComponent extends MaterialComponent{

    public loading = false;
    public module: Module;
    public dialog: LessonDialog;
    public goaldialog: StudyGoalDialog;
    public lessons: Lesson[] = [];
    public usedStudyGoals: StudyGoal[] = [];
    public unusedStudyGoals: StudyGoal[] = [];
    public id: number;
    private educationId: number;

    constructor(){
        super();
        this.module = new Module("Module","","","");
    }

    /**
     * Default braw on render event
     */
    onRender(): void{
        const parameters = braw.navigationEngine.params;
        if(parameters){
            this.educationId = parameters.educationid;
            this.id = parameters.id;
            this.loadData();
        }
    }

    /**
     * Loads all the page data
     * @param id
     * @returns {Promise<any>}
     */
    async loadData(): Promise<any>{
        this.loading = true;
        await this.loadModule();
        await this.loadLessons();
        await this.loadStudyGoals();
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
        if(result){
            this.lessons = result.map(lesson=>Lesson.fromWebservice(lesson));
        }
    }

    /**
     * Load studygoals from module id
     * @param id
     */
    async loadStudyGoals(): Promise<any>{
        const result = await Endpoints.getStudyGoalsStatusFromModule(this.id);
        if(result){
            this.usedStudyGoals = result.used.map(studyGoal=>StudyGoal.fromWebservice(studyGoal));
            this.unusedStudyGoals = result.unused.map(studyGoal=>StudyGoal.fromWebservice(studyGoal));
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

    /**
     *
     * @param {StudyGoal} goal
     */
    @bind
    saveGoal(goal: StudyGoal){
        this.loading = true;
        Endpoints.createStudyGoal(this.id,goal).then(()=>this.loadData());
    }

    /**
     * Adds a study goal
     */
    @bind
    addGoal(){
        this.goaldialog.open(this.saveGoal)
    }

    /**
     * Navigates to the lesson detail page
     * @param e
     */
    @bind
    goToLessonDetail(e): void {
        const element = e.srcElement;
        //@ts-ignore
        braw.navigate(`education/${this.educationId}/module/${this.id}/lesson/${element.dataId}`);
    }

}