import {MaterialComponent} from '@/components/material.component';
import {component} from '@locomain/brawts'
import {NavigationItem} from "@/models/navigation-item.model";

@component({
    tag:"app-drawer",
    view:require("./drawer.component.html")
})
export class Drawer extends MaterialComponent {

    selection : number = 0;
    items : NavigationItem[] = [
        new NavigationItem("Leerlingen","inbox", "/kaas"),
        new NavigationItem("Leraren","inbox", "/kaas")
    ];
}
console.log("drawer registered");
