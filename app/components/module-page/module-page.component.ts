import {MaterialComponent} from "@/components/material.component";
import {Module} from '@/models/module.model';
import {Endpoints} from "@/communication/endpoints";

@component({
    tag:"module-page",
    view:require("./module-page.component.html"),
    style:require("./module-page.component.css")
})
class ModuleComponent extends MaterialComponent{

    public modules : Module[] = [
        new Module("Module kaas"),
        new Module("Module worst"),
    ];

    /**
     * Default braw on render event
     */
    onRender(): void{
        const parameters = braw.navigationEngine.params;
        if(parameters.id){
            this.loadModules(parameters.id).then(e=>console.log(e)).catch(e=>console.log(e));
        }
    }

    /**
     *
     * @param id
     */
    async loadModules(id): Promise<any>{
        console.log(id);
        const test = await Endpoints.getModules(id);
        console.log(test);
        this.modules = [
            new Module("Module kaas 2"),
            new Module("Module worst 2"),
        ];
    }

}