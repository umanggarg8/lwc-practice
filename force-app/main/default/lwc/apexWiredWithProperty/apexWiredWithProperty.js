import { LightningElement,wire } from 'lwc';
import getContactDetails from '@salesforce/apex/ContactDetails.getContactDetails';

export default class ApexWiredWithProperty extends LightningElement {
@wire(getContactDetails) lstOfcontacts;
}