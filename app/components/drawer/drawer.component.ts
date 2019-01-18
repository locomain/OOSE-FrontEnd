import {MaterialComponent} from '@/components/material.component';
import {NavigationItem} from "@/models/navigation-item.model";

@component({
    tag:"app-drawer",
    view:require("./drawer.component.html")
})
export class Drawer extends MaterialComponent {

    /**
     * Navigation items data used to bind the list items in the navigation drawer
     * @type {NavigationItem[]}
     */
    items : NavigationItem[] = [
        new NavigationItem("Studenten","account_box", "/students"),
        new NavigationItem("Leraren","supervisor_account", "/teachers"),
        new NavigationItem("Opleidingen","inbox", "/educations")
    ];
}
