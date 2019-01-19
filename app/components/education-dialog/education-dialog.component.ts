import {MaterialComponent} from "@/components/material.component";
import bind from "@/decorators/bind";
import {InputField} from "@/components/input-field/input-field.component";
import {Education} from "@/models/education.model";
import {IDialog} from "@/interfaces/dialog.interface";

@component({
    tag:"education-dialog",
    view:require("./education-dialog.component.html"),
    style:require("./education-dialog.component.css")
})
export class EducationDialog extends MaterialComponent implements IDialog{

    private dialog: HTMLElement;
    private name: InputField;
    private year: InputField;

    private instance: any;
    private callback:(formData:object)=>void;

    /**
     * Opens the dialog
     * @param {(formData: object) => void} callback
     */
    @bind
    public open(callback:(education:Education)=>void): void {
        this.callback = callback;
        this.instance = new window.mdc.dialog.MDCDialog(this.dialog);
        this.instance.open();
    }

    /**
     * Envokes callback
     */
    public envokeCallback(){
        if(!!this.callback){
            this.callback(
                new Education(
                    this.name.value,
                    this.year.value
                )
            );
            this.callback = null;
        }
    }

    /**
     * Clears the input fields
     */
    public clear(): void{
        this.name.clear();
        this.year.clear();
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