import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME_FIELD.fieldApiName, type: 'text' ,editable: true},
    { label: 'Last Name', fieldName: LASTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'email',editable: true }
];

export default class ContactList extends LightningElement {
columns = COLUMNS;
rowOffset = 0;


@wire(getContacts) contacts;  

get errors() {
    return (this.contacts.error) ?
        reduceErrors(this.contacts.error) : [];
}

increaseRowOffset() {
    this.rowOffset += 10;
}

handlePagination(event){
    //window.console.log('Pagination Action Handled ', JSON.stringify(event.detail.records));
}

handleRowAction(event) {
    const actionName = event.detail.action.name;
    const row = event.detail.row;
    switch (actionName) {
        case 'delete':
            this.deleteRow(row);
            break;
        case 'show_details':
            this.showRowDetails(row);
            break;
        default:
    }
}

}