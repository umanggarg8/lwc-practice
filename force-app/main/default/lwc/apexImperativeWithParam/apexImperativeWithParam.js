import { LightningElement } from 'lwc';
import findContacts from '@salesforce/apex/ContactDetails.findContacts';

export default class ApexImperativeWithParam extends LightningElement {

    searchParam = '';
    contacts;
    errors;

handleChange(event){
    this.searchParam = event.target.value;
}    

handleClick(){
    findContacts({searchParam : this.searchParam})
    .then((result) => {this.contacts = result;
                       this.errors = undefined;})
    .catch((error) => {this.contacts = undefined;
                       this.errors = error; });
}    
}