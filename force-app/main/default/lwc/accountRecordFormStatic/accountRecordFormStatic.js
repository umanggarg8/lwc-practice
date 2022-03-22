import { LightningElement,api } from 'lwc';

import FIELD_NAME from '@salesforce/schema/Account.Name';
import FIELD_INDUSTRY from '@salesforce/schema/Account.Industry';
import FIELD_PHONE from '@salesforce/schema/Account.Phone';
export default class AccountRecordFormStatic extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [FIELD_NAME, FIELD_INDUSTRY, FIELD_PHONE];
   

}