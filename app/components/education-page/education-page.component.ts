import {MaterialComponent} from "@/components/material.component";
import {Education} from "@/models/education.model";
import {Endpoints} from "@/communication/endpoints";
import {bind} from "@/decorators/bind";
import {Person} from "@/models/person.model";

@component({
    tag:"education-page",
    view:require("./education-page.component.html"),
    style:require("./education-page.component.css")
})
class EducationComponent extends MaterialComponent{

    private dialog: any;
    private loading = false;
    public educations : Education[] = [];

    /**
     * Default braw render event
     */
    onRender(): void{
        super.onRender();
        this.loadEducations();
    }

    /**
     * Loads students from api
     * @returns {Promise<any>}
     */
    async loadEducations(): Promise<any>{
        this.loading = true;
        const educations = await Endpoints.getEducations();
        if(educations){
            this.educations = educations.map(education=>Education.fromWebservice(education));
            this.loading = false;
        }
    }

    /**
     * Saves/post a student to the api
     * @param {Person} person
     */
    @bind
    saveEducation(education: Education){
        this.loading = true;
        Endpoints.createEducation(education).then(()=>this.loadEducations());
    }

    /**
     * Opens the create student dialog to create a student
     */
    @bind
    addEducation(): void{
        this.dialog.open(this.saveEducation);
    }

    /**
     *
     * @param e
     */
    goToModules(e:any){
        const element = e.srcElement;
        //@ts-ignore
        braw.navigate(`/education/${element.dataId}`);
    }
}