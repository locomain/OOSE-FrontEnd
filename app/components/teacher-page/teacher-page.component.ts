import {MaterialComponent} from "@/components/material.component";
import {Teacher} from "@/models/teacher.model";

@component({
    tag:"teacher-page",
    view:require("./teacher-page.component.html"),
    style:require("./teacher-page.component.css")
})
class EducationComponent extends MaterialComponent{

    public teachers : Teacher[] = [
        new Teacher("Kekke Henkie"),
        new Teacher("Kekke Gerard"),
    ]
}