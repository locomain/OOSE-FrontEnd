import {MaterialComponent} from "@/components/material.component";
import {Student} from "@/models/student.model";
import {bind} from "@/decorators/bind";
import {PersonDialog} from "@/components/person-dialog/person-dialog.component";

@component({
    tag:"student-page",
    view:require("./student-page.component.html"),
    style:require("./student-page.component.css")
})
class EducationComponent extends MaterialComponent{

    private dialog: PersonDialog;

    public students: Student[] = [
        new Student("Kekke Henkie"),
        new Student("Kekke Gerard"),
    ];

    /**
     * Default braw render event
     */
    onRender(): void{
        super.onRender();
    }

    loadStudents(): void{

    }

    @bind
    saveStudent(formData){

    }

    @bind
    addStudent(): void{
        console.log("klik");
        this.dialog.open(this.saveStudent);
    }
}