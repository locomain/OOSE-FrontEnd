///<reference types="@locomain/brawts" />

import {component} from '@locomain/brawts'

@component({
    tag:"app-root",
    view:`<h1>test</h1>`
})
class App extends Component {

    onRender(): void{
        console.log("rendering app");
    }
}