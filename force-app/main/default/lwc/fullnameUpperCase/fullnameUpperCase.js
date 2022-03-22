import { LightningElement, api } from 'lwc';

export default class FullnameUpperCase extends LightningElement {
    firstname = '';
    lastname = '';
    uppercaseFullName = '';

    @api
    get itemName() {
        return this.firstname.toUpperCase() + ' '+ this.lastname.toUpperCase();
    };

    handleFirName(event){
        this.firstname = event.target.value;
    }

    handlelastName(event){
        this.lastname = event.target.value;

    }
}