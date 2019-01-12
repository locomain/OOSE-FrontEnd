import '@/common/types'; //initial type loading
import '@/common/braw.wrapper'; //load library wrapper
import '@/components/'; //load all components

import '@/common/routes';

import {MaterialComponent} from '@/components/material.component';

@component({
    tag:"app-root",
    view:require("./app.component.html"),
    style:require("./app.component.css")
})
class App extends MaterialComponent {

    /**
     * Default render event
     */
    public onRender(): void {
        super.onRender();
        this.attachToScope();
    }

    /**
     * Attaches this component class to the window
     */
    private attachToScope(): void{
        window.context = this;
    }

}
