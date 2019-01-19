import {MaterialComponent} from "@/components/material.component";
import {Student} from "@/models/student.model";
import {bind} from "@/decorators/bind";
import {PersonDialog} from "@/components/person-dialog/person-dialog.component";
import {Endpoints} from "@/communication/endpoints";
import {Person} from "@/models/person.model";

@component({
    tag:"student-page",
    view:require("./student-page.component.html"),
    style:require("./student-page.component.css")
})
class EducationComponent extends MaterialComponent{

    private dialog: PersonDialog;
    private loading = false;
    public students: Student[] = [];

    /**
     * Default braw render event
     */
    onRender(): void{
        super.onRender();
        this.loadStudents();
    }

    /**
     * Loads students from api
     * @returns {Promise<any>}
     */
    async loadStudents(): Promise<any>{
        this.loading = true;
        const students = await Endpoints.getStudents();
        if(students){
            this.students = students.map(student=>Student.fromWebservice(student));
            this.loading = false;
        }
    }

    /**
     * Saves/post a student to the api
     * @param {Person} person
     */
    @bind
    saveStudent(person: Person){
        this.loading = true;
        Endpoints.createStudent(person).then(()=>this.loadStudents());
    }

    /**
     * Opens the create student dialog to create a student
     */
    @bind
    addStudent(): void{
        this.dialog.open(this.saveStudent);
    }
}