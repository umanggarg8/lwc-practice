import { LightningElement } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_ADDRESSS from '@salesforce/schema/Account.BillingAddress';


export default class RecordFormComp extends LightningElement {
    accountName = ACCOUNT_NAME;
    accountRevenue = ACCOUNT_REVENUE;
    accountIndustry = ACCOUNT_INDUSTRY;
    accountAddress = ACCOUNT_ADDRESSS; 
    recordId;
    
    handleSubmit(event){
    this.recordId = event.detail.id;
    }
}