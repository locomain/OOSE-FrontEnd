import '#/types'; //initial type loading

import '#/components/drawer/drawer.component';
import '#/components/toolbar/toolbar.component';

import {MaterialComponent} from '#/components/material.component';

import {component} from '@locomain/brawts';

@component({
    tag:"app-root",
    view:require("./app.component.html")
})
class App extends MaterialComponent {

    test1 : boolean = false;
    private test: string = "Natnek"; //templating test ->app.html
    private date: Date = new Date(); //binding test ->app.html

    /**
     * Default render event
     */
    public onRender(): void {
        super.onRender();
        this.attachToScope();
        setInterval(()=>this.date=new Date(),1000); //binding test ->app.html
        setInterval(()=>this.test1=!this.test1,1000); //binding test ->app.html
    }

    /**
     * Attaches this component class to the window
     */
    private attachToScope(): void{
        window.context = this;
    }

}
