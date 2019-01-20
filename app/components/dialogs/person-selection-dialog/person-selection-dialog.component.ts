import {MaterialComponent} from "@/components/material.component";
import {IDialog} from "@/interfaces/dialog.interface";
import bind from "@/decorators/bind";
import {Endpoints} from "@/communication/endpoints";
import {Person} from "@/models/person.model";
import {Student} from "@/models/student.model";
import {Teacher} from "@/models/teacher.model";

@component({
    tag:"person-selection-dialog",
    view:require("./person-selection-dialog.component.html")
})
export class PersonSelectionDialog extends MaterialComponent implements IDialog{

    private dialog: HTMLElement;
    private id: number;
    private persons: Person[] = [];
    private selection: number;
    private instance: any;
    private personType: string;
    private callback:(id:number)=>void;

    /**
     * Sets module id value and reloads the data
     * @param val
     */
    set topicId(val){
        this.id = val;
    }

    /**
     * Gets the module id value
     * @returns {number}
     */
    get topicId(){
        return this.id;
    }

    /**
     * Default braw render event
     */
    onRender(){
        super.onRender();
        //@ts-ignore
        if(this.attributes.topic)
            //@ts-ignore
            this.personType = this.attributes.topic.value;
    }

    /**
     * Loads the data
     *
     * @returns {Promise<void>}
     */
    async loadData(){
        if(!this.id || !this.personType){
            console.warn("No id or persontype given");
            return;
        }
        let result;
        if(this.personType=="student"){
            result = await Endpoints.getStudentsNotInModule(this.id);
            if(result)
                this.persons = result.map(person=>Student.fromWebservice(person));
        } else if(this.personType=="leraar"){
            result = await Endpoints.getTeachersNotInLesson(this.id);
            if(result)
                this.persons = result.map(person=>Teacher.fromWebservice(person));
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

    /**
     * On person select callback
     *
     * @param e clicked element
     */
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