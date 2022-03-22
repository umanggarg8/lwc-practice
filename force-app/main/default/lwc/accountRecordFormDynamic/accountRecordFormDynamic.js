import { LightningElement, api } from 'lwc';


export default class AccountRecordFormDynamic extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = ['Name', 'Industry', 'Phone', 'BillingAddress'];
}
