import {MaterialComponent} from '@/components/material.component';
import {component} from '@locomain/brawts'

@component({
    tag:"app-toolbar",
    view:require("./toolbar.component.html")
})
export class Toolbar extends MaterialComponent {}
console.log("toolbar registered");
