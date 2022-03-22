import { LightningElement,api } from 'lwc';

export default class AccountRecordEditFormDynamic extends LightningElement {
    @api recordId;
    @api objectApiName;
}