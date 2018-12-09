import {MaterialComponent} from '@/components/material.component';
import {component} from '@locomain/brawts'

@component({
    tag:"app-drawer",
    view:require("./drawer.component.html")
})
export class Drawer extends MaterialComponent {}
console.log("drawer registered");
