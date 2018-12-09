import('../config');
import {component} from '@locomain/brawts'

@component({
    tag:"app-root",
    view:require("./app.html")
})
class App extends Component {

    /**
     * Default render event
     */
    onRender(): void{
        this.attachToScope();
    }

    /**
     * Attaches this component class to the window
     */
    attachToScope(){
        window.context = this;
    }

}