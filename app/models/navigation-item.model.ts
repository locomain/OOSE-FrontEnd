export class NavigationItem{

    public name: string;
    public icon: string;
    public url : string;

    constructor(name: string, icon: string, url: string){
        this.name = name;
        this.icon = icon;
        this.url = url;
    }
}