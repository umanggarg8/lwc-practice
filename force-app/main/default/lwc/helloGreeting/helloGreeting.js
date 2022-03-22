import { LightningElement,api } from 'lwc';

export default class HelloGreeting extends LightningElement {
    firstname = '';
    lastname = '';

    handleChange1(event) {
        this.firstname = event.target.value;
    }

    handleChange2(event) {
        this.lastname = event.target.value;
    }

    get fullname(){
        return `${this.firstname} ${this.lastname}`.trim().toUpperCase();
    }
    
   /*-we can use below
    @api
    get fullname(){
        return this.firstname.toUpperCase() + ' '+ this.lastname.toUpperCase();
    }*/
}