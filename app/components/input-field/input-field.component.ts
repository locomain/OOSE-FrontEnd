import {MaterialComponent} from "@/components/material.component";

@component({
    tag:"input-field",
    view:require("./input-field.component.html"),
    style:require("./input-field.component.css")
})
export class InputField extends MaterialComponent{

    private field : HTMLElement;
    private input: HTMLInputElement;

    constructor(){
        super();
    }

    /**
     * Default braw render event
     */
    onRender(){
        super.onRender();
        this.setDefaults();
        new window.mdc.textField.MDCTextField(this.field);
    }

    /**
     * Sets the default values for the input
     */
    private setDefaults(){
        if(!this.input.attributes["type"])
            this.input.attributes["type"] = "text";
    }

    /**
     * Clears the input
     */
    public clear(){
        this.input.value = "";
    }

    /**
     * Gets current input
     * @returns {string}
     */
    get value(){
        return this.input.value;
    }
}