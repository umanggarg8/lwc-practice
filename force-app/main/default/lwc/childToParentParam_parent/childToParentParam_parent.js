import { LightningElement,wire } from 'lwc';
import getAccountsWithPic from '@salesforce/apex/searchAccount.getAccountsWithPic';

export default class ChildToParentParam_parent extends LightningElement {
selectedAccount;
@wire(getAccountsWithPic) accounts;  

handleAccount(event){
  const accountId = event.detail; 
  console.log(event.detail); 
  this.selectedAccount = this.accounts.data.find(
    (account) => account.Id === accountId
); 
  
}

}