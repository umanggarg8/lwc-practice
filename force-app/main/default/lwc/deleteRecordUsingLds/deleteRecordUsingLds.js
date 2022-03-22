import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/searchAccount.getAccounts';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class DeleteRecordUsingLds extends LightningElement {
 
    accounts;
    errors;
    wiredAccountsResult;
 @wire(getAccounts) 
 accDetails(result){
    this.wiredAccountsResult = result;
     if(result.data){
         this.accounts = result.data;
         this.errors = undefined;
     }
     else {
        this.accounts = undefined;
        this.errors = result.error;
    }
 }  
 
 deleteAccount(event) {
    const recordId = event.target.dataset.recordid;
    deleteRecord(recordId)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account deleted',
                    variant: 'success'
                })
            );
            return refreshApex(this.wiredAccountsResult);
        })
        .catch((error) => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error deleting record',
                    message: 'Cannot delete',
                    variant: 'error'
                })
            );
        });
}

}
