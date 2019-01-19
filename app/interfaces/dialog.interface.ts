export interface IDialog {
    open(callback:(data:any)=>void): void
    cancel(): void;
    save(): void;
    envokeCallback(): void;
}