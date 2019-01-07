export class NavigationItem{

    public name: string;
    public icon: string;
    public targetUrl : string;

    constructor(name: string, icon: string, targetUrl:string){
        this.name = name;
        this.icon = icon;
        this.targetUrl = targetUrl;
    }
}