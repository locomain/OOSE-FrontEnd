import {MaterialComponent} from "@/components/material.component";
import {Module} from '@/models/module.model';

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
    onRender(){
        const parameters = braw.navigationEngine.params;
        if(parameters.id){
            this.loadModules(parameters.id);
        }
    }

    /**
     *
     * @param id
     */
    loadModules(id){
        this.modules = [
            new Module("Module kaas"),
            new Module("Module worst"),
        ];
    }

}