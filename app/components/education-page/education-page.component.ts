import {MaterialComponent} from "@/components/material.component";
import {Education} from "@/models/education.model";

@component({
    tag:"education-page",
    view:require("./education-page.component.html"),
    style:require("./education-page.component.css")
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
    ];

    goTo(e:any){
        const element = e.srcElement;
        const target = element.dataModel;

        console.dir(e);
        console.dir(element);
        console.log(target);

        //@ts-ignore
        braw.navigate("/education/1");
    }
}