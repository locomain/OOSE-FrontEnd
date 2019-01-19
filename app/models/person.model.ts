export class Person {

    protected firstname: string;
    protected lastname: string;
    protected email: string;

    constructor(firstname:string, lastname:string, email:string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    /**
     * Returns complete name
     * @returns {string}
     */
    get name(){
        return `${this.firstname} ${this.lastname}`;
    }
}