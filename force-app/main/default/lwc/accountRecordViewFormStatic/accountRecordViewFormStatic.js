import { LightningElement,api } from 'lwc';

import FIELD_NAME from '@salesforce/schema/Account.Name';
import FIELD_INDUSTRY from '@salesforce/schema/Account.Industry';
import FIELD_PHONE from '@salesforce/schema/Account.Phone';

export default class AccountRecordViewFormStatic extends LightningElement {
    @api recordId;
    @api objectApiName;

    name = FIELD_NAME;
    industry = FIELD_INDUSTRY;
    phone = FIELD_PHONE;

}