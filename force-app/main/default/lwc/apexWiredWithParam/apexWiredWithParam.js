import { LightningElement, wire } from 'lwc';
import findContacts from '@salesforce/apex/ContactDetails.findContacts';

export default class ApexWiredWithParam extends LightningElement {

    searchParam = '';
    @wire(findContacts,{searchParam : '$searchParam'}) contacts;

    handleChange(event){
     this.searchParam = event.target.value;
    }
}