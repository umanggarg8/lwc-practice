import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import FIELD_NAME from '@salesforce/schema/Account.Name';
import FIELD_INDUSTRY from '@salesforce/schema/Account.Industry';
import FIELD_PHONE from '@salesforce/schema/Account.Phone';

const fields = [FIELD_NAME,FIELD_INDUSTRY,FIELD_PHONE];

export default class AccountRecordUiApiStatic extends LightningElement {

    @api recordId;

    @wire(getRecord,{recordId : '$recordId', fields}) account;

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