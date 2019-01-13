import {MaterialComponent} from "@/components/material.component";
import {Education} from "@/models/education.model";

@component({
    tag:"student-page",
    view:require("./student-page.component.html"),
    style:require("./student-page.component.css")
})
class EducationComponent extends MaterialComponent{

    public educations : Education[] = [
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies"),
        new Education("ICT XH2a 2019","ICT deeltijd opleiding voor grote dummies")
    ]
}