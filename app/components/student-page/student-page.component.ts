import {MaterialComponent} from "@/components/material.component";
import {Student} from "@/models/student.model";

@component({
    tag:"student-page",
    view:require("./student-page.component.html"),
    style:require("./student-page.component.css")
})
class EducationComponent extends MaterialComponent{

    public dialog : HTMLElement;

    public students : Student[] = [
        new Student("Kekke Henkie"),
        new Student("Kekke Gerard"),
    ];


    onRender(): void{
        console.dir(this.dialog);
        console.dir(this);
        //@ts-ignore
        //const dialog = new window.mdc.dialog.MDCDialog(this.dialog);
    }

    loadStudents(): void{

    }
}