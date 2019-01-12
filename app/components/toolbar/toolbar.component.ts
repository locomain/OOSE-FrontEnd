import {MaterialComponent} from '@/components/material.component';

@component({
    tag:"app-toolbar",
    view:require("./toolbar.component.html"),
    style:require("./toolbar.component.css")
})
export class Toolbar extends MaterialComponent {}