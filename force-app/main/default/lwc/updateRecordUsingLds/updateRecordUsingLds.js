import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import getSingleAccount from '@salesforce/apex/searchAccount.getSingleAccount';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ID_FIELD from '@salesforce/schema/Account.Id';

export default class UpdateRecordUsingLds extends LightningElement {
 disabled = false;
 error;
 @wire(getSingleAccount) account;

 handleChange(event) {
   if (!event.target.value) {
       this.disabled = true;
   }
   else {
       this.disabled = false;
   }
}

 updateAccount(){
    const fields = {};
    fields[ID_FIELD.fieldApiName] = this.template.querySelector("[data-field='Id']").value;
    fields[NAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='Name']").value;
    fields[PHONE_FIELD.fieldApiName] = this.template.querySelector("[data-field='Phone']").value;

    const recordInput = { fields };

    updateRecord(recordInput)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contact updated',
                    variant: 'success'
                })
            );
            // Display fresh data in the form
            return refreshApex(this.account);
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });

     }
 
}