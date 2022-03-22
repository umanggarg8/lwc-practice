import { LightningElement } from 'lwc';
import getContactDetails from '@salesforce/apex/ContactDetails.getContactDetails';

export default class ApexImperative extends LightningElement {
    contacts;
    errors;
    handleContacts(){
        getContactDetails()
            .then((result) => {this.contacts = result;
                             this.errors = undefined;})
            .catch((error) => {this.contacts = undefined;
                             this.errors = error;})       

    }   
}