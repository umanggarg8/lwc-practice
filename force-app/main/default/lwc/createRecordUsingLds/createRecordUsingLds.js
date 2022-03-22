import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
export default class CreateRecordUsingLds extends LightningElement {

accName;
accPhone;
accountId;

handleName(event){
    this.accName = event.target.value;
}

handlePhone(event){
    this.accPhone = event.target.value;

}
handleClick(){
    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.accName;
    fields[PHONE_FIELD.fieldApiName] = this.accPhone;
    const recordInput = {apiName : ACCOUNT_OBJECT.objectApiName, fields };
    createRecord(recordInput)
    .then((result) => {
        this.accountId = result.id;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Account created',
                variant: 'success'
            })
        );
    })
    .catch((error) => {
    
});
}
}