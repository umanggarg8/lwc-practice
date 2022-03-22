import { LightningElement } from 'lwc';
import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';


export default class RecordFormContact extends LightningElement {
    contactFirstName = CONTACT_FIRSTNAME;
    contactLastName = CONTACT_LASTNAME;
    contactPhone = CONTACT_PHONE;
    contactEmail = CONTACT_EMAIL;
}