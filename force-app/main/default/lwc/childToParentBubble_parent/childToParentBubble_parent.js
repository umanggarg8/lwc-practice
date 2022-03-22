import { LightningElement, wire } from 'lwc';
import getAccountsWithPic from '@salesforce/apex/searchAccount.getAccountsWithPic';

export default class ChildToParentBubble_parent extends LightningElement {
 
 selectedAccount;
 @wire(getAccountsWithPic) accounts; 
 
 handleAccount(event){
     console.log(event.target.account);
     this.selectedAccount = event.target.account;
 }


}