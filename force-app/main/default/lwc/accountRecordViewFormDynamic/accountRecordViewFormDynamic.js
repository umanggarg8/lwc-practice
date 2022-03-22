import { LightningElement,api } from 'lwc';

export default class AccountRecordViewFormDynamic extends LightningElement {
    @api recordId;
    @api objectApiName;
}