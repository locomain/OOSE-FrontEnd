import('@/types');
import {component} from '@locomain/brawts'

@component({
    tag:"app-root",
    view:require("./app.html")
})
class App extends Component {

    test: string = "Natnek"; //templating test ->app.html
    date: Date = new Date(); //binding test ->app.html

    /**
     * Default render event
     */
    onRender(): void{
        this.attachToScope();
        setInterval(()=>this.date=new Date(),1000);
    }

    /**
     * Attaches this component class to the window
     */
    attachToScope(){
        window.context = this;
    }

}