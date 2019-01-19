import {MaterialComponent} from "@/components/material.component";

@component({
    tag:"input-field",
    view:require("./input-field.component.html"),
    style:require("./input-field.component.css")
})
export class InputField extends MaterialComponent{

    private field : HTMLElement;
    private input: HTMLInputElement;

    /**
     * Default braw render event
     */
    onRender(){
        super.onRender();
        new window.mdc.textField.MDCTextField(this.field);
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