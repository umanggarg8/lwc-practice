import { LightningElement,api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const fields = ['Account.Name','Account.Industry', 'Account.Phone'];

export default class AccountRecordUIApiDynamic extends LightningElement {
    @api recordId;
    
    @wire(getRecord, {recordId: '$recordId', fields}) account;
    get name(){
        return this.account.data.fields.Name.value;
    }

    get industry(){
        return this.account.data.fields.Industry.value;
    }

    get phone(){
        return this.account.data.fields.Phone.value;
    }

}