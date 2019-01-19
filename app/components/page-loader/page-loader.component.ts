import {MaterialComponent} from "@/components/material.component";

@component({
    tag:"page-loader",
    view:`
        <div #bar role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate progress">
            <div class="mdc-linear-progress__buffering-dots"></div>
            <div class="mdc-linear-progress__buffer"></div>
            <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                <span class="mdc-linear-progress__bar-inner"></span>
            </div>
            <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span class="mdc-linear-progress__bar-inner"></span>
            </div>
        </div>
    `,
    style:`
        .progress{
            position: fixed!important;
            top: 56px;
            width: 100vh;
            left: 0;
        }
    `
})
export class PageLoader extends MaterialComponent {

    private bar: HTMLElement;

    /**
     * Default braw render event
     */
    onRender(){
        super.onRender();
        let instance = new window.mdc.linearProgress.MDCLinearProgress(this.bar);
    }
}
