import '@locomain/brawts';

export abstract class MaterialComponent extends Component {

    public onRender() {
        window.mdc.autoInit(this);
    }
}
