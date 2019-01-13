import {MaterialComponent} from "@/components/material.component";
import {Student} from "@/models/student.model";

@component({
    tag:"student-page",
    view:require("./student-page.component.html"),
    style:require("./student-page.component.css")
})
class EducationComponent extends MaterialComponent{

    public students : Student[] = [
        new Student("Kekke Henkie"),
        new Student("Kekke Gerard"),
    ]
}