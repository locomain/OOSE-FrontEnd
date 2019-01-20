import {MaterialComponent} from "@/components/material.component";
import {IDialog} from "@/interfaces/dialog.interface";
import bind from "@/decorators/bind";
import {StudyGoal} from "@/models/studygoal.model";
import {Endpoints} from "@/communication/endpoints";

@component({
    tag:"study-goal-selection-dialog",
    view:require("./study-goal-selection-dialog.component.html")
})
export class StudyGoalSelectionDialog extends MaterialComponent implements IDialog{

    private dialog: HTMLElement;
    private id: number;
    private goals: StudyGoal[] = [];
    private selection: number;
    private instance: any;
    private callback:(id:number)=>void;

    /**
     * Sets module id value and reloads the data
     * @param val
     */
    set lesson(val){
        this.id = val;
        this.loadData();
    }

    /**
     * Gets the module id value
     * @returns {number}
     */
    get lesson(){
        return this.id;
    }

    /**
     * Loads the data
     *
     * @returns {Promise<void>}
     */
    async loadData(){
        if(!this.id)return;
        const result = await Endpoints.getUnusedStudyGoalsFromLesson(this.id);
        if(result){
            if(Array.isArray(result)) this.goals = result.map(goal=>StudyGoal.fromWebservice(goal));
        }
    }

    /**
     * Opens the dialog
     * @param {(formData: object) => void} callback
     */
    @bind
    public open(callback:(goalId:number)=>void): void {
        this.loadData();
        this.callback = callback;
        this.instance = new window.mdc.dialog.MDCDialog(this.dialog);
        this.instance.open();
    }

    /**
     * Envokes callback
     */
    public envokeCallback(): void{
        if(!!this.callback){
            this.callback(this.selection);
            this.callback = null;
        }
    }

    @bind
    public select(e){
        this.selection = e.target.data;
        this.envokeCallback();
        this.instance.close();
    }

    /**
     * Cancels the process of creating a person and closes the dialog
     */
    @bind
    public cancel(): void{
        this.instance.close();
    }

    //TODO
    public save(): void{}
}