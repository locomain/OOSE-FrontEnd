import {MaterialComponent} from "@/components/material.component";
import {IDialog} from "@/interfaces/dialog.interface";
import {InputField} from "@/components/input-field/input-field.component";
import bind from "@/decorators/bind";
import {Lesson} from "@/models/lesson.model";


@component({
    tag:"lesson-dialog",
    view:require("./lesson-dialog.component.html"),
    style:require("./lesson-dialog.component.css")
})
export class LessonDialog extends MaterialComponent implements IDialog{

    private dialog: HTMLElement;
    private name: InputField;
    private editor: HTMLTextAreaElement;
    private date: InputField;
    public previewData: string = "";

    private instance: any;
    private callback:(formData:object)=>void;

    /**
     * Default braw render event
     */
    onRender(){
        super.onRender();
    }

    /**
     * On editor typed event
     */
    @bind
    public onTyped(e):void {
        this.previewData = this.editor.value;
    }

    /**
     * Opens the dialog
     * @param {(formData: object) => void} callback
     */
    @bind
    public open(callback:(lesson:Lesson)=>void): void {
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
                new Lesson(
                    this.name.value,
                    this.previewData,
                    this.date.value
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
        this.editor.value = "";
        this.previewData = "";
        this.date.clear();
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
        this.clear();
    }
}