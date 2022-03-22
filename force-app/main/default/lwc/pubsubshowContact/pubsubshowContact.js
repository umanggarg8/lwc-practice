import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TITLE_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import PICTURE_FIELD from '@salesforce/schema/Account.Picture__c';

const fields = [NAME_FIELD, TITLE_FIELD,PHONE_FIELD, PICTURE_FIELD];

export default class PubsubshowContact extends LightningElement {
    recordId;
    name;
    industry;
    phone;
    picture;

  
    @wire(CurrentPageReference) pageRef;

    @wire(getRecord,{recordId: '$recordId', fields}) 
    wiredRecord({ error, data }) {
        if (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading account',
                    message: reduceErrors(error).join(', '),
                    variant: 'error'
                })
            );
        } else if (data) {
            this.name = getFieldValue(data, NAME_FIELD);
            this.industry = getFieldValue(data, TITLE_FIELD);
            this.phone = getFieldValue(data, PHONE_FIELD);
            this.picture = getFieldValue(data, PICTURE_FIELD);
            console.log(this.name);
        }
    }

    connectedCallback() {
        console.log('doint in 3rd comp ');
        registerListener('accountSelected', this.handleAccountSelected, this);
    }

    handleAccountSelected(accountId) {
            console.log('acc id->'+accountId);
            this.recordId = accountId;

    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }


}