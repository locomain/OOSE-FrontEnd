import {MaterialComponent} from "@/components/material.component";
import bind from "@/decorators/bind";
import {InputField} from "@/components/input-field/input-field.component";
import {Person} from "@/models/person.model";

@component({
    tag:"person-dialog",
    view:require("./person-dialog.component.html"),
    style:require("./person-dialog.component.css")
})
export class PersonDialog extends MaterialComponent{

    private dialog: HTMLElement;
    private firstname: InputField;
    private lastname: InputField;
    private mail: InputField;

    private instance: any;
    private personType: string;
    private callback:(formData:object)=>void;

    constructor(){
        super();
        this.personType = "Student";
    }

    /**
     * Opens the dialog
     * @param {(formData: object) => void} callback
     */
    @bind
    public open(callback:(formPerson:Person)=>void): void {
        this.callback = callback;
        this.instance = new window.mdc.dialog.MDCDialog(this.dialog);
        this.instance.open();
    }

    /**
     * Envokes callback
     */
    private envokeCallback(){
        if(!!this.callback){
            this.callback(
                new Person(
                    this.firstname.value,
                    this.lastname.value,
                    this.mail.value)
            );
            this.callback = null;
        }
    }

    /**
     * Clears the input fields
     */
    public clear(){
        this.firstname.clear();
        this.lastname.clear();
        this.mail.clear();
    }

    /**
     * Cancels the process of creating a person and closes the dialog
     */
    @bind
    public cancel(){
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