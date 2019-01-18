import {MaterialComponent} from "@/components/material.component";
import bind from "@/decorators/bind";

@component({
    tag:"person-dialog",
    view:require("./person-dialog.component.html")
})
export class PersonDialog extends MaterialComponent{

    private dialog: HTMLElement;
    private personType: string;
    private callback:(formData:object)=>void;

    constructor(){
        super();
        this.personType = "Student";
    }

    onRender(): void{
        super.onRender();
    }

    @bind
    open(callback:(formData:object)=>void): void {
        this.callback = callback;
        const dialogInstance = new window.mdc.dialog.MDCDialog(this.dialog);
        console.log(dialogInstance);
        dialogInstance.open();
    }

    @bind
    close(){
        this.callback({});
    }
}