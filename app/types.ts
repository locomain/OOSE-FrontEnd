///<reference types="@locomain/brawts" />

declare global {
    interface Window {
        context: any, //app context
        mdc:any //material.io library
    }
}
export default {} // tscompiler needs a module for the global declaration..