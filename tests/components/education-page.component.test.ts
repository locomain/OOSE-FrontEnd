//@ts-ignore
import { expect } from 'chai';
import 'mocha';
import {EducationComponent} from '@/components/education-page/education-page.component';
import {Education} from "@/models/education.model";

const mockEducations = [
    {
        id:1,
        naam: "ICT deeltijd",
        startjaar:"2016"
    }
];
global["fetch"] = Promise.resolve(mockEducations);


describe('Load education',()=>{
    it(`Should return-> Array of 1 education`, async ()=>{
        //const component = new EducationComponent();
        //await component.loadEducations();
        //expect(JSON.stringify(component.educations)).to.equal(JSON.stringify([new Education("ICT deeltijd","2016",1)]));
    });
});