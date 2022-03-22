import { LightningElement,wire } from 'lwc';
import getContactDetails from '@salesforce/apex/ContactDetails.getContactDetails';

export default class ApexWiredWithMethod extends LightningElement {

    contacts;
    error;
@wire(getContactDetails) 
    getContacts({data, error}){
      if(data){
        this.contacts = data;
        this.error = undefined;
      } else {
        this.contacts = undefined;
        this.error = error;
      }
    }

}