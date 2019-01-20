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
import {StudyGoalSelectionDialog} from "@/components/dialogs/study-goal-selection-dialog/study-goal-selection-dialog.component";

@component({
    tag:"lesson-detail-page",
    view:require("./lesson-detail-page.component.html"),
    style:require("./lesson-detail-page.component.css")
})
class LessonPageComponent extends MaterialComponent{

    public loading = false;
    public lesson: Lesson;
    public dialog: StudyGoalSelectionDialog;
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
        if(result){
            this.lesson = Lesson.fromWebservice(result,this.lesson);
        }
    }

    /**
     * Load lessons from lesson id
     * @param id
     */
    async loadStudyGoals(): Promise<any>{
        const result = await Endpoints.getStudyGoalsFromLesson(this.id);
        if(result){
            this.studyGoals = result.map(studyGoal=>StudyGoal.fromWebservice(studyGoal));
        }
    }


    /**
     * Adds a studygoal to the lesson
     *
     * @param {Lesson} lesson
     */
    @bind
    saveGoal(goal: number){
        this.loading = true;
        Endpoints.createStudyGoalForLesson(this.id,goal).then(()=>this.loadData());
    }

    /**
     * Opens the create student dialog to create a student
     */
    @bind
    addGoal(): void{
        this.dialog.open(this.saveGoal);
    }

}