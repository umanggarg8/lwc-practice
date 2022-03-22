import { LightningElement, wire } from 'lwc';
import {getSObjectValue} from '@salesforce/apex';
import getSingleContact from '@salesforce/apex/ContactDetails.getSingleContactDetail';

import FIELD_NAME from '@salesforce/schema/Contact.Name';
import FIELD_TITLE from '@salesforce/schema/Contact.Title';
import FIELD_EMAIL from '@salesforce/schema/Contact.Email';

export default class ApexWithStaticSchema extends LightningElement {

@wire(getSingleContact) contact;

get name(){
  return this.contact.data ? getSObjectValue(this.contact.data, FIELD_NAME) : ''; 
}

get title(){
  return this.contact.data ? getSObjectValue(this.contact.data, FIELD_TITLE) : ''; 

}

get email(){
  return this.contact.data ? getSObjectValue(this.contact.data, FIELD_EMAIL) : ''; 

}
}