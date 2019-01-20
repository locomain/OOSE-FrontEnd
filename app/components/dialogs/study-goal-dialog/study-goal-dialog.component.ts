import {MaterialComponent} from "@/components/material.component";
import {IDialog} from "@/interfaces/dialog.interface";
import {InputField} from "@/components/input-field/input-field.component";
import bind from "@/decorators/bind";
import {Person} from "@/models/person.model";
import {StudyGoal} from "@/models/studygoal.model";

@component({
    tag:"study-goal-dialog",
    view:require("./study-goal-dialog.component.html"),
    style:require("./study-goal-dialog.component.css")
})
export class StudyGoalDialog extends MaterialComponent implements IDialog{

    private dialog: HTMLElement;
    private name: InputField;
    private description: InputField;

    private instance: any;
    private personType: string;
    private callback:(formData:object)=>void;

    constructor(){
        super();
        this.personType = "Persoon";
    }

    /**
     * Opens the dialog
     * @param {(formData: object) => void} callback
     */
    @bind
    public open(callback:(goal:StudyGoal)=>void): void {
        this.callback = callback;
        this.instance = new window.mdc.dialog.MDCDialog(this.dialog);
        this.instance.open();
    }

    /**
     * Envokes callback
     */
    public envokeCallback(): void{
        if(!!this.callback){
            this.callback(
                new StudyGoal(
                    this.name.value,
                    this.description.value)
            );
            this.callback = null;
        }
    }

    /**
     * Clears the input fields
     */
    public clear(): void{
        this.name.clear();
        this.description.clear();
    }

    /**
     * Cancels the process of creating a person and closes the dialog
     */
    @bind
    public cancel(): void{
        this.clear();
        this.instance.close();
    }

    /**
     * Passes the data trough the given callback and closes the dialog
     */
    @bind
    public save(): void{
        this.envokeCallback();
        this.instance.close();
    }
}