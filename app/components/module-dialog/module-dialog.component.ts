import {MaterialComponent} from "@/components/material.component";
import bind from "@/decorators/bind";
import {InputField} from "@/components/input-field/input-field.component";
import {Education} from "@/models/education.model";
import {IDialog} from "@/interfaces/dialog.interface";
import {Module} from "@/models/module.model";

@component({
    tag:"module-dialog",
    view:require("./module-dialog.component.html"),
    style:require("./module-dialog.component.css")
})
export class ModuleDialog extends MaterialComponent implements IDialog{

    private dialog: HTMLElement;
    private name: InputField;
    private description: InputField;
    private startdate: InputField;
    private enddate: InputField;

    private instance: any;
    private callback:(formData:object)=>void;

    /**
     * Opens the dialog
     * @param {(formData: object) => void} callback
     */
    @bind
    public open(callback:(module:Module)=>void): void {
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
                new Module(
                    this.name.value,
                    this.description.value,
                    this.startdate.value,
                    this.enddate.value
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
        this.description.clear();
        this.startdate.clear();
        this.enddate.clear();
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