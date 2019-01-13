import '@locomain/brawts';
import {Theme} from "@/utils/theme";

export abstract class MaterialComponent extends Component {

    public theme: Theme;

    constructor(){
        super();
        this.theme = new Theme();
    }

    public onRender() {
        window.mdc.autoInit(this);
    }
}
