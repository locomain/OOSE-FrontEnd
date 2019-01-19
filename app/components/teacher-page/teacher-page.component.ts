import {MaterialComponent} from "@/components/material.component";
import {Teacher} from "@/models/teacher.model";
import {Endpoints} from "@/communication/endpoints";
import {bind} from "@/decorators/bind";
import {Person} from "@/models/person.model";
import {Student} from "@/models/student.model";
import {PersonDialog} from "@/components/dialogs/person-dialog/person-dialog.component";

@component({
    tag:"teacher-page",
    view:require("./teacher-page.component.html"),
    style:require("./teacher-page.component.css")
})
class EducationComponent extends MaterialComponent{

    public teachers : Teacher[] = [];
    private dialog: PersonDialog;
    private loading = false;

    /**
     * Default braw render event
     */
    onRender(): void{
        super.onRender();
        this.loadTeachers();
    }

    /**
     * Loads students from api
     * @returns {Promise<any>}
     */
    async loadTeachers(): Promise<any>{
        this.loading = true;
        const teachers = await Endpoints.getTeachers();
        if(teachers){
            this.teachers = teachers.map(teacher=>Teacher.fromWebservice(teacher));
            this.loading = false;
        }
    }

    /**
     * Saves/post a teacher to the api
     * @param {Person} person
     */
    @bind
    saveTeacher(person: Person){
        this.loading = true;
        Endpoints.createTeacher(person).then(()=>this.loadTeachers());
    }

    /**
     * Opens the create teacher dialog to create a student
     */
    @bind
    addTeacher(): void{
        this.dialog.open(this.saveTeacher);
    }
}